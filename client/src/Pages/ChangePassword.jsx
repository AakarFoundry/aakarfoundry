import React, { useState } from "react";
import styles from "../assets/styles/change.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const ChangePassword = () => {
  const [oldPassValidation, setOldPassValidation] = useState(true);
  const [confirmPassValidation, setConfirmPassValidation] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNewPassword = (e) => {
    setNewPass(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPass(e.target.value);
    if (e.target.value !== newPass) {
      setConfirmPassValidation(false);
    } else {
      setConfirmPassValidation(true);
    }
  };

  const handleOldPassword = (e) => {
    if (e.target.value === "") {
      setOldPassValidation(false);
    } else {
      setOldPassValidation(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      OldPassword: data.get("Old password"),
      NewPassword: data.get("New password"),
      ConfirmNewPassword: data.get("Confirm New password"),
    });
  };

  return (
    
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          "@media screen and (min-width: 64em)": { margincentre: 15 },
          display: "flex",
          alignItems: "centre",
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
          <Typography component="h1" variant="h5" sx={{ color: "#18234F", fontWeight: "600" }}>
            Change Password 
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Enter old password <span style={{ color: "red" }}>*</span> 
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#18234F" },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                },
              }}
              // margin="normal"
              
              fullWidth
              id="Old password"
              onChange={handleOldPassword}
              label="Enter old password"
              name="Old password"
              type={showOldPassword ? "text" : "password"}
              autoComplete="Old password"
              autoFocus
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    edge="end"
                  >
                    {showOldPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            </Typography>
          
        
          
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Enter New password <span style={{ color: "red" }}>*</span> 
            
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#18234F" },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                },
              }}
              // margin="normal"
              
              fullWidth
              name="New password"
              onChange={handleNewPassword}
              label="Enter new Password"
              type={showNewPassword ? "text" : "password"}
              id="New password"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                  >
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            </Typography>
          
        
          
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Confirm New password <span style={{ color: "red" }}>*</span> 
            
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#18234F" },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                },
              }}
              // margin="normal"
              
              fullWidth
              onChange={handleConfirmPassword}
              name="Confirm new password"
              label="Confirm new password"
              type={showConfirmPassword ? "text" : "password"}
              id="Confirm new password"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            </Typography>
        
         
            {!confirmPassValidation && confirmPass !== "" && (
              <p className={`${styles.textDanger}`}>
                Entered Password do not match{" "}
              </p>
            )}
            <Link
              to={confirmPassValidation && oldPassValidation ? "/dash" : ""}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>

  );
};

export default ChangePassword;
