import React from 'react';
import '../css/createAccountPage.css'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
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
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        console.log("Form Submitted");
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const paperStyle = { padding: '30px 20px', width: 350, margin: "20px auto", backgroundColor: '#EAFFD0'};
        const headerStyle = { margin: 0 };
        const avatarStyle = { backgroundColor: '#a696c8' }
        return (
            <Grid>
                <Paper elevation={12} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            {/* alt="fundoo Notes"
                            src="/fundoonotes-app/src/components/images/pngtree-notes-icon-vector-png-image_2340328.jpg"
                            sx={{ width: 56, height: 56 }}  */}
                            <CollectionsBookmarkSharpIcon />
                        </Avatar>
                        <h2 class="rainbow" style={headerStyle}>
                            <span>f</span>
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
                        </h2>
                        <br />
                        <Typography variant='h7' color='primary' gutterBottom><b><i>Create your fundooNotes Account</i></b></Typography>
                    </Grid>
                    <form>
                        <br />
                        <TextField required  id="outlined-basic" color= 'primary' type='text' label='First Name' placeholder="Enter your first name"  onChange={this.handleChange}/>
                        <br />
                        <TextField required id="outlined-basic" color= 'primary' type= 'text' label='Last Name' placeholder="Enter your last name"  onChange={this.handleChange}/>
                        <br />
                        <TextField required id="outlined-basic" color= 'primary' type= 'email' label='Email' placeholder="Enter your email"  onChange={this.handleChange}/>
                        <br />
                        <TextField required id="outlined-basic" color= 'primary' type= 'password' label='Password' placeholder="Enter your password"  onChange={this.handleChange} />
                        <br />
                        <TextField required id="outlined-basic" color= 'primary' type= 'password' label='Confirm Password' placeholder="Confirm your password"  onChange={this.handleChange}/>
                        <br />
                        <br />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" style={{transform: "scale(0.75)"}} />}
                            label= {<span style={{ fontSize: '0.75rem' }}>I accept the terms and conditions.</span>}
                            onChange={this.handleChange}
                        />
                        <br /><br />
                        <Button type='submit' variant='contained' color='primary'><b>Sign up</b></Button>
                    </form>
                </Paper>
            </Grid>
        )
    }
}



