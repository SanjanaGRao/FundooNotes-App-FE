import React from 'react';
import '../css/createAccountPage.css'
import accounts from "../Assets/account.svg"
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

export default function CreateAccount() {
    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        showPassword: false,
        showPasswordConfirmation: false,
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
    const handleClickShowPasswordConfirmation = () => {
        setValues({
            ...values,
            showPasswordConfirmation: !values.showPasswordConfirmation

        });
    };
    const handleClickShowPasswords = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
            showPasswordConfirmation: !values.showPasswordConfirmation

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
                                                value={values.firstName}
                                                onChange={handleChange("firstName")}
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
                                                value={values.lastName}
                                                onChange={handleChange("lastName")}
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
                                            value={values.email}
                                            onChange={handleChange("email")}
                                        />
                                    </div>
                                    <br />
                                    <div className="passwords" align="left">
                                        <div className="pass">
                                            <FormControl sx={{ width: '25ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    size="small"
                                                    onChange={handleChange('password')}
                                                    endAdornment={
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                                size="small"
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                    required
                                                    fullwidth
                                                    name="passwordConfirmation"
                                                    color='primary'
                                                    placeholder="Enter your password"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="confirmPassword">
                                            <FormControl sx={{ width: '25ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={values.showPasswordConfirmation ? 'text' : 'password'}
                                                    value={values.passwordConfirmation}
                                                    size="small"
                                                    onChange={handleChange('passwordConfirmation')}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                size="small"
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPasswordConfirmation}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Confirm Password"
                                                    required
                                                    fullwidth
                                                    name="passwordConfirmation"
                                                    color='primary'
                                                    placeholder="Confirm your password"
                                                />
                                            </FormControl>
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
                                                    onClick={handleClickShowPasswords}
                                                    onMouseDown={handleMouseDownPassword}
                                                />
                                            }
                                            label={<span style={{ fontSize: '0.75rem' }}>Show Passwords</span>}
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
