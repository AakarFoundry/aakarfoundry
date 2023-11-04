import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function UserApproval() {
  const emailRegex = /^\w+([\.-]?\w+)*@aakarfoundry\.com$/;
  const phoneRegex = /^\d{10}$/;

  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const phoneNumber = data.get('phoneNumber');

    setEmailError(!emailRegex.test(email));
    setPhoneError(!phoneRegex.test(phoneNumber));

    if (!emailRegex.test(email) || !phoneRegex.test(phoneNumber)) {
      return;
    }

    // Proceed with form submission
    console.log({
      email: email,
      password: data.get('password'),
      fullName: data.get('name'),
      phoneNumber: phoneNumber,
      role: data.get('role'),
      department: data.get('department'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
                  Role/Title
                </Typography>
                <TextField
                  required
                  id="role"
                  label="Role/title"
                  name="role"
                  autoComplete="role"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Department
                </Typography>
                <TextField
                  required
                  id="department"
                  label="Department"
                  name="department"
                  autoComplete="organization"
                  style={{ width: '100%' }}
                />
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
}
