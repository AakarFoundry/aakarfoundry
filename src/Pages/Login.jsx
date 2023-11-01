import logo from "../assets/img/Logo.png";
import hexagons from "../assets/img/login_hexagons@2x.png";
import cloud from "../assets/img/login_cloud-storage.png";
import styles from "../assets/styles/Login.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export const Login = () => {
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setForm] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  function isMail(val) {
    var mail = /^\w+([\.-]?\w+)*@aakarfoundry\.com$/;
    const isValid = mail.test(val);
    setIsEmailValid(isValid);
    return isValid;
  }

  function isNumber(val) {
    var phoneNo = /^\d{4}$/;
    const isValid = phoneNo.test(val);
    setIsNumberValid(isValid); 
    return isValid;
  }

  function onFormSubmit(e) {
    e.preventDefault();

    var email = isMail(formData.email);
    var password = isNumber(formData.password);
    if (email && password) {
      console.log(formData);
      alert("Done");
    } else {
      alert("Failed");
    }
  }

  useEffect(() => {
    setForm({
      email: "",
      password: "",
    });
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
{/*  const handlePassword = (e) => {
    if (e.target.value === "") {
      setConfirmPassValidation(false);
    } else {
      setConfirmPassValidation(true);
    }
  };*/}

  return (
    <div className={styles.frameLogin}>
      <div className={styles.div}>
        <img className={styles.image} alt="Logo" src={logo} />
        <div className={styles.overlap}>
          <img className={styles.hexagons} alt="Hexagons" src={hexagons} />
          <img
            className={styles.cloudStorageImage}
            alt="Cloud storage icon"
            src={cloud}
          />
          <div className={styles.ellipse} />
        </div>
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            "@media screen and (min-width: 64em)": {
              marginLeft: 15,
            },
            display: "flex",
            alignItems: "left",
          }}
        >
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "white" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEvent}
                helperText={isEmailValid ? "" : "Invalid Email Address"}
                error={!isEmailValid}
              />
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "white" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "Password"}
                id="password"
                autoComplete="Password"
                // onChange={handlePassword}x
                helperText={isNumberValid ? "" : "Invalid Password"}
                error={!isNumberValid}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
                onClick={onFormSubmit}
              >
                Log In
              </Button>
              <div className={styles.registerLine}>
                
                Don&apos;t have an account?&nbsp;
                <Link href="/register" variant="body2">
                  {"\t\tCreate Account"}
                </Link>
              </div>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

