import React from "react";
import "/Users/sanjana.rao_ymediala/reactjs-fundooNotes/fundoonotes-app/src/css/loginPage.css";
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

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailNotValid, setEmailNotValid] = React.useState(false);
  const [passwordNotValid, setPasswordNotValid] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailNotValid(false);
    setPasswordNotValid(false);
    if (email === "") setEmailNotValid(true);
    if (password === "") setPasswordNotValid(true);
  };
  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const headerStyle = { margin: 0 };
  return (
    <div className="imgBoxForLogin">
      <div className="outerBox">
        <div className="outerPadding"></div>
        <div>
          <div className="main" align="center">
            <Grid align="center" className="headingAndSubHeading">
              <h1 class="rainbow" style={headerStyle}>
                <span>F</span>
                <span>u</span>
                <span>n</span>
                <span>d</span>
                <span>o</span>
                <span>o</span>
                <span>N</span>
                <span>o</span>
                <span>t</span>
                <span>e</span>
                <span>s</span>
              </h1>
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
                        onChange={(event) => setEmail(event.target.value)}
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
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
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
                    <div>
                      <div className="showPasswordLogin">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
