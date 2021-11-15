import React, { useState } from "react";
import userPost from "../service/usersApiIntegration";
import { Link } from "react-router-dom";
import { Grid, TextField, Typography, Button } from "@mui/material";
import "../css/forgetPasswordPage.css";
import { emailValidation } from "../config/validation";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailNotValid, setEmailNotValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || !emailValidation.test(email)) {
      setEmailNotValid(true);
      alert("An error occured.");
    } else {
      userPost("users/forgot", {
        email: email,
      });
      alert("Email Successfully Sent.");
    }
  };
  return (
    <div
      style={{ width: "420px" }}
      className="imgBoxForForgetPassword"
      align="center"
    >
      <div className="outerBox">
        <div className="outerPadding"></div>
        <form id="forgotpassword" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  <span className="mainLogoForgetPassword">FundooNotes</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  <b>Find your Password</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="p">
                  <b>Enter your Email</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <br />
                <TextField
                  required
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  placeholder="xyz@example.com"
                  error={emailNotValid}
                  helperText={emailNotValid ? "Please enter a valid email" : ""}
                  fullWidth
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailNotValid) {
                      setEmailNotValid(false);
                    }
                  }}
                />
              </Grid>
            </Grid>
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
                  <b> Back </b>
                </Button>
              </div>
              <div className="create">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  <b>Next</b>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
