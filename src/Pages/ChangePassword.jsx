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
  const [oldPassValidation, setOldPassValidation] = useState(false);
  const [confirmPassValidation, setConfirmPassValidation] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [newPassValidation, setNewPassValidation] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordPolicy, setShowPasswordPolicy] = useState(false);
  const [passwordPolicyError, setPasswordPolicyError] = useState("");

  const handleOldPassword = (e) => {
    const oldPassword = e.target.value;
    if (oldPassword.trim() === "") {
      setOldPassValidation(false);
    } else {
      setOldPassValidation(true);
    }
  };

  const handleNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPass(newPassword);

    // Password criteria validation logic
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numericRegex = /[0-9]/;

    const isLengthValid = lengthRegex.test(newPassword);
    const isUppercaseValid = uppercaseRegex.test(newPassword);
    const isSpecialCharValid = specialCharRegex.test(newPassword);
    const isNumericValid = numericRegex.test(newPassword);

    setNewPassValidation(isLengthValid && isUppercaseValid && isSpecialCharValid && isNumericValid);
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPass(confirmPassword);
  
    // Password criteria validation logic
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numericRegex = /[0-9]/;
  
    const isLengthValid = lengthRegex.test(confirmPassword);
    const isUppercaseValid = uppercaseRegex.test(confirmPassword);
    const isSpecialCharValid = specialCharRegex.test(confirmPassword);
    const isNumericValid = numericRegex.test(confirmPassword);
  
    // Enable confirm password validation only if the new password meets all criteria
    const isNewPasswordValid = isLengthValid && isUppercaseValid && isSpecialCharValid && isNumericValid;
    setNewPassValidation(isNewPasswordValid);
  
    // Handle error messages for mismatched passwords and missing password policies
    let errorMessage = "";
    if (!isNewPasswordValid) {
      errorMessage += "Entered Passwords do not meet the criteria. ";
    }
    if (!isLengthValid) {
      errorMessage += "Password must be at least 8 characters long. ";
    }
    if (!isUppercaseValid) {
      errorMessage += "Password must include at least one uppercase character. ";
    }
    if (!isSpecialCharValid) {
      errorMessage += "Password must include at least one special character. ";
    }
    if (!isNumericValid) {
      errorMessage += "Password must include at least one numeric character. ";
    }
  
    setPasswordPolicyError(errorMessage.trim());
    
    // Enable confirm password validation only if the new password and old password are valid
    const isConfirmPasswordValid = confirmPassword === newPass && isNewPasswordValid && oldPassValidation;
    setConfirmPassValidation(isConfirmPasswordValid);
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


  

  const passwordPolicyText = (
    <Typography variant="body2" sx={{ mt: 2, color: "red" }}>
      Password Policy * <br />
      • Be a minimum length of eight (8) characters on all systems. <br />
      • Must include minimum one uppercase character <br />
      • Must include minimum of one special character <br />
      • Must include minimum of one numeric character
    </Typography>
  );
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
              type={showNewPassword ? "text" : "password"}
              onFocus={() => setShowPasswordPolicy(true)}
              onBlur={() => setShowPasswordPolicy(false)}
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
              type={showConfirmPassword ? "text" : "password"}
              id="Confirm new password"
              onFocus={() => setShowPasswordPolicy(true)}
              onBlur={() => setShowPasswordPolicy(false)}
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
        
         
            {confirmPass !== newPass && confirmPass !== "" && newPass !== "" && (
  <p className={`${styles.textDanger}`}>
    Entered Passwords do not match.
  </p>
)}

            {passwordPolicyError && <p className={`${styles.textDanger}`}>{passwordPolicyError}</p>}
            {showPasswordPolicy && passwordPolicyText}


            <Link to={(confirmPassValidation && oldPassValidation) ? "/dash" : ""}>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
           disabled={!confirmPassValidation || !oldPassValidation || !newPassValidation}
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
