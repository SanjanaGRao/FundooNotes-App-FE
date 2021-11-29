import React from "react";
import "../css/createAccount/createAccountPage.css";
import accounts from "../assets/account.svg";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../config/validation";
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
import { Link, Redirect } from "react-router-dom";
import userPost from "../service/usersApiIntegration";

export default function CreateAccount() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [firstNameNotValid, setFirstNameNotValid] = React.useState(false);
  const [lastNameNotValid, setLastNameNotValid] = React.useState(false);
  const [emailNotValid, setEmailNotValid] = React.useState(false);
  const [passwordNotValid, setPasswordNotValid] = React.useState(false);
  const [passwordConfirmationNotValid, setPasswordConfirmationNotValid] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    React.useState(false);
  const [accountCreated,setAccountCreated] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    let error = false;
    event.preventDefault();
    if (!nameValidation.test(firstName)) { setFirstNameNotValid(true); error=true; } 
    if (!nameValidation.test(lastName)) { setLastNameNotValid(true); error=true; } 
    if (!emailValidation.test(email)) { setEmailNotValid(true); error=true; } 
    if (!passwordValidation.test(password)) { setPasswordNotValid(true); error=true; } 
    if (password !== passwordConfirmation) {
      setPasswordConfirmationNotValid(true);
      error=true; 
    } if (error) {
      console.log("Account could not be created. Please follow th rules mentioned.");
    } else {
      userPost("users", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      setAccountCreated(true);
    }
  };

  const handleClickShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="imgBox">
      <div className="outerBox">
        <div className="outerPadding"></div>
        <div>
          <div>
            <Grid align="left" className="headingAndSubHeading">
              <span className="mainLogo">FundooNotes</span>
              <br />
              <Typography variant="h6" gutterBottom>
                <b>Create your FundooNotes Account</b>
              </Typography>
            </Grid>
            <form id="form" name="form">
              <div className="innerImg">
                <div className="inputBox">
                  <br />
                  <div className="names" align="left">
                    <div className="firstName">
                      <TextField
                        required
                        variant="outlined"
                        name="firstName"
                        color="primary"
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        size="small"
                        error={firstNameNotValid}
                        helperText={
                          firstNameNotValid ? "Invalid First Name" : ""
                        }
                        onChange={(event) => {
                          setFirstName(event.target.value);
                          if (firstNameNotValid) {
                            setFirstNameNotValid(false);
                          }
                        }}
                      />
                    </div>
                    <div className="lastName">
                      <TextField
                        required
                        variant="outlined"
                        name="lastName"
                        color="primary"
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        size="small"
                        error={lastNameNotValid}
                        helperText={lastNameNotValid ? "Invalid Last Name" : ""}
                        onChange={(event) => {
                          setLastName(event.target.value);
                          if (lastNameNotValid) {
                            setLastNameNotValid(false);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="email" align="left">
                    <TextField
                      required
                      fullWidth
                      id="full-width-text-field"
                      variant="outlined"
                      name="email"
                      color="primary"
                      type="email"
                      label="Email"
                      placeholder="xyz@example.com"
                      autoComplete="email"
                      size="small"
                      error={emailNotValid}
                      helperText={
                        emailNotValid
                          ? "Invalid Email"
                          : "Your mail can consist of letters, numbers and periods"
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
                  <div className="passwords" align="left">
                    <div className="pass">
                      <FormControl
                        sx={{ width: "25ch" }}
                        variant="outlined"
                        required
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          size="small"
                          error={passwordNotValid}
                          helperText={
                            passwordNotValid
                              ? "Invalid password"
                              : "Use 8 or more characters with a mix of letters, numbers & symbols"
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
                          required
                          fullwidth
                          name="password"
                          color="primary"
                          placeholder="Enter your password"
                        />
                      </FormControl>
                    </div>
                    <div className="confirmPassword">
                      <FormControl
                        sx={{ width: "25ch" }}
                        variant="outlined"
                        required
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Confirm Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPasswordConfirmation ? "text" : "password"}
                          size="small"
                          error={passwordConfirmationNotValid}
                          helperText={
                            passwordConfirmationNotValid
                              ? "Password does not match"
                              : ""
                          }
                          onChange={(event) => {
                            setPasswordConfirmation(event.target.value);
                            if (passwordConfirmationNotValid) {
                              setPasswordConfirmationNotValid(false);
                            }
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                size="small"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPasswordConfirmation}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPasswordConfirmation ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Confirm Password"
                          required
                          fullwidth
                          name="passwordConfirmation"
                          color="primary"
                          placeholder="Confirm your password"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="message">
                    <span>
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </span>
                  </div>
                  <br />
                  <div className="showPassword" align="left">
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          name="checkbox"
                          onClick={handleClickShowPasswords}
                          onMouseDown={handleMouseDownPassword}
                        />
                      }
                      label={
                        <span style={{ fontSize: "0.75rem" }}>
                          Show Passwords
                        </span>
                      }
                    />
                  </div>
                  <div className="signInSignUp">
                    <div className="signIn">
                      <Button
                        variant="text"
                        id="sign-in-button"
                        component={Link}
                        to="/login"
                        style={{ textTransform: "none" }}
                        color="primary"
                      >
                        <b>Sign in instead</b>
                      </Button>
                    </div>
                    <div className="create">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        name="createAcc"
                        onClick={handleSubmit}
                      >
                        <b>Create</b>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    src={accounts}
                    width={260}
                    height={244}
                    style={{ verticalAlign: "middle" }}
                    alt=""
                  />
                </div>
              </div>
              {accountCreated?<Redirect to="/login"/>:null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
