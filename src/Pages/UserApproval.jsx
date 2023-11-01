import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";



export const UserApproval = () => {


    const roleOptions = ["CEO", "HOD", "Employee"];
  const departmentOptions = ["IT", "Marketing", "Machining"];


    const [selectedRole, setSelectedRole] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setForm] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isRoleValid, setIsRoleValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isDepartmentValid, setIsDepartmentValid] = useState(true);

  function isfullName(val) {
    if (val) {
        var regex = /^[a-zA-Z.-\s]*$/;
        const isValid = regex.test(val) && val.trim().length > 0;
        setIsNameValid(isValid);
        return isValid;
      } else {
        // Handle the case when val is undefined or empty
        setIsNameValid(false);
        return false;
      }
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
  
  function isRole(val) {
    if (val) {
        var regex = /^[a-zA-Z.-\s]*$/;
        const isValid = regex.test(val) && val.trim().length > 0;
        setIsRoleValid(isValid);
        return isValid;
      } else {
        // Handle the case when val is undefined or empty
        setIsRoleValid(false);
        return false;
      }
  }
  

  function isDepartmentBox(val) {
    if (val) {
        var regex = /^[a-zA-Z.-\s]*$/;
        const isValid = regex.test(val) && val.trim().length > 0;
        setIsDepartmentValid(isValid);
        return isValid;
      } else {
        // Handle the case when val is undefined or empty
        setIsDepartmentValid(false);
        return false;
      }
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
    var name = isfullName(formData.name);
    var email = isMail(formData.email);
    var number = isNumber(formData.number);
    var department = isDepartmentBox(formData.department);
    
    var number = isRole(formData.role);

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
      
    });
    setSelectedRole(""); // Reset selected role
    setSelectedDepartment("");
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
  
       
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh",
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
            <Typography component="h1" variant="h5" sx={{ color: "black" }}>
              Create User
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "black" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "black" },
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
                  "& .MuiInputLabel-root": { color: "black" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "black" },
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
                  "& .MuiInputLabel-root": { color: "black" }, 
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "black" },
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
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                required
                sx={{
                "& .MuiInputLabel-root": { color: isRoleValid ? "black" : "red" },
                "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: isRoleValid ? "black" : "red" },
                },
                }}
            >
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                label="Role"
                >
                {roleOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            margin="normal"
            fullWidth
            required
            sx={{
              "& .MuiInputLabel-root": { color: isRoleValid ? "black" : "red" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border: 0.5, borderColor: isDepartmentValid ? "black" : "red" },
              },
            }}
          >
            <InputLabel htmlFor="department">Department</InputLabel>
            <Select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              label="Department"
            >
              {departmentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
                onClick={onFormSubmit}
              >
                Add USer
              </Button>
              {/*<div className={styles.registerLine}>
                
                Already a Member?&nbsp;
                <Link href="/" variant="body2">
                  {"Login"}
                </Link>
            </div>*/}
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
     
  );
};
