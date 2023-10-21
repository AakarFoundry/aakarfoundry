import * as React from 'react';
import Alert from '@mui/material/Alert';
import logo from "../assets/img/Logo.png";
import hexagons from "../assets/img/login_hexagons@2x.png";
import cloud from "../assets/img/login_cloud-storage.png"
import styles from "../assets/styles/Register.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export const Register = () => {
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setForm] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  function isfirstName(val) {
    var reg = /^[a-zA-Z\s]+$/;
    if (reg.test(val) && val.trim().length > 0) return true;
    return false;
  }

  function isMail(val) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.test(val)) return true;
    return false;
  }

  function isNumber(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isDepartmentBox(val) {
    var regex = /^[a-zA-Z.-\s]*$/;
    if (regex.test(val) && val.trim().length > 0) return true;
    return false;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    var name = isfirstName(formData.name);
    var email = isMail(formData.email);
    var department = isDepartmentBox(formData.department);
    var number = isNumber(formData.number);
    if (name && email && department && number) {
      console.log(formData);
      setIsSuccess(true); // Set success alert to visible
      setIsFailure(false); // Hide failure alert
    } else {
      setIsSuccess(false); // Hide success alert
      setIsFailure(true); // Set failure alert to visible
    }
  }

  useEffect(() => {
    setForm({
      name: "",
      email: "",
      number: "",
      department: "",
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className={styles.frameRegister}>
      <div className={styles.div}>
        <img className={styles.image} alt="Logo" src={logo} />
        <div className={styles.overlap}>
          <img className={styles.hexagons} alt="Hexagons" src={hexagons} />
          <img className={styles.cloudStorageImage} alt="Cloud storage icon" src={cloud} />
          <div className={styles.ellipse} />
        </div>
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
        <Container component="main" maxWidth="xs" sx={{
          '@media screen and (min-width: 64em)': {
            marginLeft: 15
          }, display: "flex", alignItems: "left"
        }}>
          <Box
            sx={{
              marginTop: 15,
              marginLeft: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
              Create Account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: 'white' }, // styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                onChange={handleEvent}
                autoFocus
              />
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: 'white' }, // styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                variant="outlined"
                margin=" normal"
                required
                fullWidth
                name="email"
                label="Work Email"
                type="email"
                id="email"
                onChange={handleEvent}
                autoComplete=""
              />
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: 'white' }, // styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="number"
                label="Phone Number"
                type="text"
                id="number"
                onChange={handleEvent}
                autoComplete=""
              />

              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: 'white' }, // styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="department"
                label="Department"
                type="text"
                id="department"
                onChange={handleEvent}
                autoComplete=""
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1565C0' }}
                onClick={onFormSubmit}
              >
                Register
              </Button>
              <div className={styles.registerLine}> Already a member?&nbsp;
                <Link href="/" variant="body2" >
                  {"Login"}
                </Link>
              </div>
            </Box>
          </Box>

          {isSuccess && (
            <Alert
              severity="success"
              color="info"
              style={{
                backgroundColor: '#4CAF50', 
                color: 'white', 
                borderRadius: '0.25rem', 
                width: '18%', 
                position: 'fixed', 
                top: '2rem',
                left: '50%', 
                transform: 'translateX(-50%)', 
                zIndex: 1000, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2rem', 
              }}
              onClose={() => setIsSuccess(false)}
            >
              Registration successful!
            </Alert>
          )}

          {isFailure && (
            <Alert
              severity="error"
              color="info"
              style={{
                backgroundColor: 'red', 
                color: 'white', 
                borderRadius: '0.25rem', 
                width: '18%', 
                position: 'fixed', 
                top: '2rem', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                zIndex: 1000, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2rem', 
              }}
              onClose={() => setIsFailure(false)}
            >
              Registration failed.
            </Alert>
          )}
        </Container>
      </div>
    </div>
  );
}
