import React from "react";
import "../css/login/loginPage.css";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import userPost from "../service/usersApiIntegration";
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailNotValid, setEmailNotValid] = React.useState(false);
  const [passwordNotValid, setPasswordNotValid] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [success,setSuccess] = React.useState(false);

  let EM = email;
  let PW = password;
  const datas = { email: EM, password: PW };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    let error = false;
    event.preventDefault();
    if (email === "") { setEmailNotValid(true); error=true; }
    if (password === "") { setPasswordNotValid(true); error=true; }
    if(error) {
      console.log("Cannot Log In.");
      alert("Login Unsuccessful.");
    }
    else {
      console.log(datas)
      userPost("users/login", datas );
      setSuccess(true);
    }      
  };
  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="imgBoxForLogin">
      <div className="outerBox">
        <div className="outerPadding"></div>
        <div>
          <div className="main" align="center">
            <Grid align="center" className="headingAndSubHeading">
              <span className="mainLogoLogin">FundooNotes</span>
              <br />
              <Typography variant="h6" gutterBottom>
                <b> Sign In</b>
              </Typography>
              <Typography variant="h7" gutterBottom>
                <b> Use your FundooNotes Account</b>
              </Typography>
            </Grid>
            <div style={{ width: "418px" }}>
              <form id="form" className="formLogin">
                <div className="innerImgbox2">
                  <div
                    className="inputBoxForLogin"
                    style={{ width: "366px", margin: "26px", padding: "0px" }}
                  >
                    <div className="emailLogin" align="center">
                      <TextField
                        required
                        id="full-width-text-field"
                        style={{ width: 365 }}
                        variant="outlined"
                        name="email"
                        color="primary"
                        type="email"
                        size="small"
                        label="Email"
                        placeholder="xyz@example.com"
                        error={emailNotValid}
                        helperText={
                          emailNotValid
                            ? "This field cannot be empty"
                            : "You can use letters, numbers and periods"
                        }
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (emailNotValid) {
                            setEmailNotValid(false);
                          }
                        }}
                      />
                    </div>
                    <br />
                    <div className="passwordLogin" align="center">
                      <div className="pass2">
                        <FormControl variant="outlined" fullWidth required>
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            fullwidth
                            type={showPassword ? "text" : "password"}
                            size="small"
                            error={passwordNotValid}
                            helperText={
                              passwordNotValid
                                ? "This field cannot be empty"
                                : ""
                            }
                            onChange={(event) => {
                              setPassword(event.target.value);
                              if (passwordNotValid) {
                                setPasswordNotValid(false);
                              }
                            }}
                            endAdornment={
                              <InputAdornment position="start">
                                <IconButton
                                  size="small"
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                            name="passwordConfirmation"
                            color="primary"
                            placeholder="Enter your password"
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className="messageLogin" align="center">
                      <span>
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </span>
                    </div>
                    <br />
                    <div className="passwordAndForgotPassword">
                      <div className="showPasswordLogin" align="left">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                              onClick={handleClickShowPasswords}
                              onMouseDown={handleMouseDownPassword}
                            />
                          }
                          label={
                            <span style={{ fontSize: "0.75rem" }}>
                              Show Password
                            </span>
                          }
                        />
                      </div>
                      <div className="forgotPassword" align="right">
                        <Button
                          variant="text"
                          style={{ textTransform: "none" }}
                          color="primary"
                          size="small"
                          component={Link}
                          to="/forgot"
                        >
                          Forgot Password?
                        </Button>
                      </div>
                    </div>
                    <div className="signInSignUp">
                      <div className="signIn">
                        <Button
                          variant="text"
                          id="link-btn"
                          component={Link}
                          to="/"
                          style={{ textTransform: "none" }}
                          color="primary"
                        >
                          <b>Create Account</b>
                        </Button>
                      </div>
                      <div className="create">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          <b>Sign In</b>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {success?<Redirect to="/dashboard"/>:null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
