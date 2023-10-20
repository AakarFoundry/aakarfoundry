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
export const Register = () => {
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
        <Container component="main" maxWidth="xs" sx={{ marginLeft:15,display:"flex", alignItems: "left"}}>
      <Box
        sx={{  
          marginTop: 15,
          marginLeft:0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{color : 'white' }}>
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{
              "& .MuiInputLabel-root": {color: 'white'},//styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:0.5,borderColor: "white" },
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
            
            autoFocus
          />
          <TextField
            sx={{
              "& .MuiInputLabel-root": {color: 'white'},//styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:0.5,borderColor: "white" },
                },
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Work Email"
            type="email"
            id="email"
            autoComplete=""
          />
          <TextField
            sx={{
              "& .MuiInputLabel-root": {color: 'white'},//styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:0.5,borderColor: "white" },
                },
            }}
          margin="normal"
          required
          fullWidth
          name="number"
          label="Phone Number"
          type="text"
          id="number"
          autoComplete=""
        />
        <TextField
            sx={{
              "& .MuiInputLabel-root": {color: 'white'},//styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:0.5,borderColor: "white" },
                },
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            sx={{
              "& .MuiInputLabel-root": {color: 'white'},//styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:0.5,borderColor: "white" },
                },
            }}
            variant="outlined" 
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor:'#1565C0' }}
          >
            Register          
          </Button>
          <div className={styles.registerLine}> Already a member?&nbsp; 
          <Link href="/" variant="body2" >
                { "Login"}
              </Link></div>
        </Box>
      </Box>
    </Container>
      </div>
    </div>
  );
};
