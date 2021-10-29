import React from 'react';
import "/Users/sanjana.rao_ymediala/reactjs-fundooNotes/fundoonotes-app/src/css/loginPage.css";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Link } from "react-router-dom";

export default function Login() {  

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailNotValid, setEmailNotValid] = React.useState(false);
    const [passwordNotValid, setPasswordNotValid] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
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
      <div className="imgBox">
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
                  <b> to your FundooNotes Account</b>
                </Typography>
              </Grid>
              <form id="form" className="form">
                <div className="innerImg" align="center">
                  <div className="inputBox" align="center">
                    <br />
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
                        size="small"
                        error={emailNotValid}
                        helperText={
                          emailNotValid ? "This field cannot be empty" : ""
                        }
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <br />
                    <div className="password" align="left">
                      <div className="pass">
                        <FormControl sx={{ width: "35ch" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            required
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
                    <div className="showPassword">
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
                    <div className="newButtons" align="center">
                      <div className="forgotPassword" align="right">
                        <Button
                          variant="text"
                          style={{ textTransform: "none" }}
                          color="primary"
                        >
                          <b>Forgot Password</b>
                        </Button>
                      </div>
                      <br />
                      <div className="submit" align="left">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          <b>Submit</b>
                        </Button>
                      </div>
                    </div>
                    <div className="create" align="center">
                        <Button variant="text" id="link-btn" component={Link} to="/" style={{ textTransform: "none" }} color="primary">Create Account</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
        </div>
        </div>
    );
}