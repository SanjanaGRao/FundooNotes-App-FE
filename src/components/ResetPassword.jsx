import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import userPost from "../service/apiIntegration";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../css/resetPasswordPage.css";
import { passwordValidation } from "../config/validation";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [passwordNotValid, setPasswordNotValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmationNotValid, setPasswordConfirmationNotValid] =
    React.useState(false);
  const { token } = useParams();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "" || !passwordValidation.test(password)) {
      setPasswordNotValid(true);
    }
    if (password !== passwordConfirmation) {
      setPasswordConfirmationNotValid(true);
      alert("Password Mismatch.");
    } else {
      userPost(`users/${window.location.pathname}`, {
        password: password,
        token: token,
      });
      alert("Reset Password Successful.");
      window.location = "/login";
    }
  };
  return (
    <div
      style={{ width: "443px" }}
      className="imgBoxForResetPassword"
      align="center"
    >
      <div className="outerBox">
        <div className="outerPadding"></div>
        <form id="resetPassword" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  <span className="mainLogoResetPassword">FundooNotes</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  <b> Reset your FundooNotes Password </b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="p">
                  <b> Enter a new Password </b>
                </Typography>
              </Grid>
              <Grid item xs={16}>
                <br />
                <TextField
                  required
                  id="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  placeholder="Enter a new Password"
                  type={showPassword ? "text" : "password"}
                  error={passwordNotValid}
                  helperText={
                    passwordNotValid
                      ? "Please enter a valid Password"
                      : "Use 8 or more characters with mix of letters, numbers & symbols"
                  }
                  fullWidth
                  onChange={(event) => {
                    setPassword(event.target.value);
                    if (passwordNotValid) {
                      setPasswordNotValid(false);
                    }
                  }}
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  required
                  id="password"
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  placeholder="Type the same Password"
                  type={showPassword ? "text" : "password"}
                  error={passwordConfirmationNotValid}
                  helperText={
                    passwordConfirmationNotValid
                      ? "Password does not match"
                      : ""
                  }
                  fullWidth
                  onChange={(event) => {
                    setPasswordConfirmation(event.target.value);
                    if (passwordConfirmationNotValid) {
                      setPasswordConfirmationNotValid(false);
                    }
                  }}
                />
              </Grid>
            </Grid>
            <div className="showPassword" align="left">
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    onClick={handleClickShowPassword}
                  />
                }
                label={
                  <span style={{ fontSize: "0.75rem" }}>Show Passwords</span>
                }
              />
            </div>
            <br />
            <br />
            <div className="signInSignUp">
              <div className="signIn">
                <Button
                  id="link-btn"
                  component={Link}
                  to="/login"
                  style={{ textTransform: "none" }}
                  color="primary"
                >
                  <b> Sign In </b>
                </Button>
              </div>
              <div className="create">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  <b>Reset</b>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
