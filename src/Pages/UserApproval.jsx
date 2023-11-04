import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../Components/NavBar";


const defaultTheme = createTheme();

const UserApproval = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@aakarfoundry\.com$/;
  const phoneRegex = /^\d{10}$/;

  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [department, setDepartment] = React.useState('');
  const [role, setRole] = React.useState('');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const phoneNumber = data.get('phoneNumber');

    setEmailError(!emailRegex.test(email));
    setPhoneError(!phoneRegex.test(phoneNumber));

    if (!emailRegex.test(email) || !phoneRegex.test(phoneNumber) || !department || !role) {
      return;
    }

    // Proceed with form submission
    console.log({
      email: email,
      fullName: data.get('name'),
      phoneNumber: phoneNumber,
      department: department,
      role: role,
    });
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    toast.success('User has been added successfully!', toastOptions);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "#18234F", fontWeight: "600" }}>
            Create User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }} sx={{ color: "#18234F", fontWeight: "600" }}>
                  Full Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  required
                  id="name"
                  label="Enter Details"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Email Address <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  required
                  error={emailError}
                  helperText={emailError ? 'Invalid email address' : ''}
                  id="email"
                  label="Enter Details"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  required
                  error={phoneError}
                  helperText={phoneError ? 'Invalid phone number' : ''}
                  id="phoneNumber"
                  label="Enter Details"
                  name="phoneNumber"
                  autoComplete="tel"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Department <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  required
                  id="department"
                  value={department}
                  onChange={handleDepartmentChange}
                  label="Enter Details"
                  style={{ width: '100%' }}
                >
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Machine">Machine</MenuItem>
                  <MenuItem value="Quality">Quality</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Role <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  required
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                  label="Enter Details"
                  style={{ width: '100%' }}
                >
                  <MenuItem value="CEO">CEO</MenuItem>
                  <MenuItem value="HOD">HOD</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default UserApproval;