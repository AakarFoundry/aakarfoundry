import Alert from "@mui/material/Alert";
import logo from "../assets/img/Logo.png";
import hexagons from "../assets/img/login_hexagons@2x.png";
import cloud from "../assets/img/login_cloud-storage.png";
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
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isDepartmentValid, setIsDepartmentValid] = useState(true);

  function isfirstName(val) {
    var reg = /^[a-zA-Z\s]+$/;
    const isValid = reg.test(val) && val.trim().length > 0;
    setIsNameValid(isValid); 
    return isValid;
  }

  function isMail(val) {
    var mail = /^\w+([\.-]?\w+)*@aakarfoundry\.com$/;
    const isValid = mail.test(val);
    setIsEmailValid(isValid); 
    return isValid;
  }

  function isNumber(val) {
    var phoneNo = /^\d{10}$/;
    const isValid = phoneNo.test(val);
    setIsNumberValid(isValid); 
    return isValid;
  }

  function isDepartmentBox(val) {
    var regex = /^[a-zA-Z.-\s]*$/;
    const isValid = regex.test(val) && val.trim().length > 0;
    setIsDepartmentValid(isValid); 
    return isValid;
  }

  useEffect(() => {
    const closeAlerts = () => {
      setIsSuccess(false);
      setIsFailure(false);
    };

    const timer = setTimeout(closeAlerts, 2000);

    return () => clearTimeout(timer);
  }, [isSuccess, isFailure]);
  function onFormSubmit(e) {
    e.preventDefault();
    var name = isfirstName(formData.name);
    var email = isMail(formData.email);
    var department = isDepartmentBox(formData.department);
    var number = isNumber(formData.number);
    if (name && email && department && number) {
      console.log(formData);
      setIsSuccess(true);
      setIsFailure(false);
    } else {
      setIsSuccess(false);
      setIsFailure(true);
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
              marginTop: 15,
              marginLeft: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Create Account
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
                helperText={isNameValid ? "" : "Invalid name"}
                error={!isNameValid}
              />
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "white" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEvent}
                autoFocus
                helperText={isEmailValid ? "" : "Invalid Email"}
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
                name="number"
                label="Phone Number"
                type="text"
                id="number"
                onChange={handleEvent}
                autoComplete=""
                helperText={isNumberValid ? "" : "Invalid phone number."}
                error={!isNumberValid}
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
                name="department"
                label="Department"
                type="text"
                id="department"
                onChange={handleEvent}
                autoComplete=""
                helperText={isDepartmentValid ? "" : "Invalid Department Name."}
                error={!isDepartmentValid}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
                onClick={onFormSubmit}
              >
                Register
              </Button>
              <div className={styles.registerLine}>
                
                Already a Member?&nbsp;
                <Link href="/" variant="body2">
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
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "0.25rem",
                width: "18%",
                position: "fixed",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "2rem",
              }}
              onClose={() => setIsSuccess(false)}
            >
              Registration Successful!
            </Alert>
          )}

          {isFailure && (
            <Alert
              severity="error"
              color="info"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "0.25rem",
                width: "18%",
                position: "fixed",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "2rem",
              }}
              onClose={() => setIsFailure(false)}
            >
              Registration Failed.
            </Alert>
          )}
        </Container>
      </div>
    </div>
  );
};
