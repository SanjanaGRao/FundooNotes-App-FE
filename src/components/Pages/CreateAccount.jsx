import React from 'react';
import '../css/createAccountPage.css'
import accounts from "../images/account.svg"
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            showPassword: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    isValidName(name) {
        const onlyAlphabetsAndSpace = /^[a-zA-Z\s]+$/;
        return onlyAlphabetsAndSpace.test(name);
    }
    handleSubmit(event) {
        console.log("Form Submitted");
        event.preventDefault();
    }
    handleChange(event) {
        var name = event.target.value;
        if (name) {
            var isValid = this.isValidName(name);
        }
        if (isValid) {
            this.setState({
                [event.target.name]: event.target.value,
            });
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    }
    render() {
        const headerStyle = { margin: 0 };
        return (
            <div className="imgBox">
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
                            <form onSubmit={this.handleSubmit} id="form" name="form">
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
                                                    value={this.state.firstName}
                                                    onChange={this.handleChange}
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
                                                    value={this.state.lastName}
                                                    onChange={this.handleChange}
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
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <br />
                                        <div className="passwords" align="left">
                                            <div className="pass">
                                                <TextField
                                                    required
                                                    fullwidth
                                                    variant="outlined"
                                                    name="password"
                                                    color='primary'
                                                    type="password"
                                                    label='Password'
                                                    size="small"
                                                    placeholder="Enter your password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="confirmPassword">
                                                <TextField
                                                    required
                                                    fullwidth
                                                    variant="outlined"
                                                    name="passwordConfirmation"
                                                    color='primary'
                                                    type='password'
                                                    label='Confirm Password'
                                                    placeholder="Confirm your password"
                                                    size="small"
                                                    value={this.state.passwordConfirmation}
                                                    onChange={this.handleChange}
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
                                                    />
                                                }
                                                label={<span style={{ fontSize: '0.75rem' }}>Show Password</span>}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="signInSignUp">
                                            <div className="signIn">
                                                <Button variant="text" style={{ textTransform: 'none' }} color='primary' ><b>Sign in instead</b></Button>
                                            </div>
                                            <div className="create">
                                                <Button type='submit' variant='contained' color='primary' onChange={this.handleSubmit}><b>Create</b></Button>
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
}

