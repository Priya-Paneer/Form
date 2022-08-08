import { useState, useEffect } from "react";
// import "./App.css";
import {Button, Grid,Paper,TextField, Typography,Link} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';

function Login() {
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length<=5) {
      errors.username = "Username must be atleast 5 characters";
    } else if (values.username.length>=10) {
      errors.username = "Username should not exceed 10 characters";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } 
    return errors;
  };

  return (
    
    <Grid>
    <Paper  elevation={10} style={paperStyle}>
    <Grid align="center">
    < LockIcon/>
    <h2>Sign in</h2>
    </Grid>
     <TextField style ={{marginBottom:"2vh"}}
      label='Username' placeholder="Enter Username" fullWidth required 
      value={formValues.username} name="username" onChange={handleChange}

      />
      <p style={{color:"red"}}>{formErrors.username}</p>
     <TextField label='Password' placeholder="Enter Password" type='password' fullWidth required
     value={formValues.password} name="password" onChange={handleChange}

      />
      <p style={{color:"red"}}>{formErrors.password}</p>
     <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Remember me"
         />
         <Button style={{margin:"8px 0"}} type='Submit' color='primary' variant="contained" onClick={handleSubmit} fullWidth>Sign In</Button>
         <Typography><Link href="#">Forget Password</Link></Typography>
         <Typography>Do you have an account?
            <Link href="#">Sign up</Link>
        </Typography>
    </Paper>
</Grid>
);



}

export default Login;