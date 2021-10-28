import React from 'react';
import '../css/createAccountPage.css'
import accounts from "../Assets/account.svg"
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CreateAccount() {
    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const headerStyle = { margin: 0 };
    return (
        <div className="imgBox" >
            <div className="outerBox">
                <div className="outerPadding"></div>
                <div>
                    <div>
                        <Grid align='left' className="headingAndSubHeading">
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
                            <Typography variant='h6' gutterBottom><b>Create your FundooNotes Account</b></Typography>
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
                                                color='primary'
                                                type='text'
                                                label='First Name'
                                                placeholder="Enter your first name"
                                                size="small"
                                            />
                                        </div>
                                        <div className="lastName">
                                            <TextField
                                                required
                                                variant="outlined"
                                                name="lastName"
                                                color='primary'
                                                type='text'
                                                label='Last Name'
                                                placeholder="Enter your last name"
                                                size="small"
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
                                            color='primary'
                                            type='email'
                                            label='Email'
                                            placeholder="xyz@example.com"
                                            autoComplete="email"
                                            size="small"
                                            helperText="Your mail can consist of letters, numbers and periods"
                                        />
                                    </div>
                                    <br />
                                    <div className="passwords" align="left">
                                        <div className="pass">
                                            <TextField
                                                required
                                                className="firstPasswordBox"
                                                label="Password"
                                                variant="outlined"
                                                size="small"
                                                variant="outlined"
                                                size="small"
                                                type={values.showPassword ? "text" : "password"}
                                                value={values.password}
                                                onChange={handleChange("password")}
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                        <div className="confirmPassword">
                                            <TextField
                                                required
                                                fullwidth
                                                variant="outlined"
                                                name="passwordConfirmation"
                                                color='primary'
                                                label='Confirm Password'
                                                placeholder="Confirm your password"
                                                size="small"
                                                type={values.showPassword ? "text" : "password"}
                                                value={values.passwordConfirmation}
                                                onChange={handleChange("passwordConfirmation")}
                                            />
                                        </div>
                                    </div>
                                    <div className="message">
                                        <span>
                                            Use 8 or more characters with a mix of letters, numbers & symbols
                                        </span>
                                    </div>
                                    <br />
                                    <div className="showPassword">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="allowExtraEmails"
                                                    color="primary"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                />
                                            }
                                            label={<span style={{ fontSize: '0.75rem' }}>Show Password</span>}
                                        />
                                    </div>
                                    <div className="signInSignUp">
                                        <div className="signIn">
                                            <Button variant="text" style={{ textTransform: 'none' }} color='primary' ><b>Sign in instead</b></Button>
                                        </div>
                                        <div className="create">
                                            <Button type='submit' variant='contained' color='primary' ><b>Create</b></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={accounts} width={260} height={244} style={{ verticalAlign: 'middle' }} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
