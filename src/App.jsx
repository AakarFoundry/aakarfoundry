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
import NavBar from './Components/NavBar';

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
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      <NavBar/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Full Name
                </Typography>
                <TextField
                  required
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Email Address
                </Typography>
                <TextField
                  required
                  error={emailError}
                  helperText={emailError ? 'Invalid email address' : ''}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Phone Number
                </Typography>
                <TextField
                  required
                  error={phoneError}
                  helperText={phoneError ? 'Invalid phone number' : ''}
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="tel"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Department
                </Typography>
                <Select
                  required
                  id="department"
                  value={department}
                  onChange={handleDepartmentChange}
                  label="Department"
                  style={{ width: '100%' }}
                >
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Machine">Machine</MenuItem>
                  <MenuItem value="Quality">Quality</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Role/Title
                </Typography>
                <Select
                  required
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                  label="Role/title"
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
      </Container>
    </ThemeProvider>
  );
};

export default UserApproval;
