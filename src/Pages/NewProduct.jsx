import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography, Select, MenuItem } from "@mui/material";

const NewProductDev = (props) => {

  const { details, setDetails } = props;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value
    });
  };


  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
        mb: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="on"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              
              Capital Investment For Machines <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="investment"
              id="investment "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              color: "#054470",
              fontWeight: "650",
              fontSize: "1.2rem",
              padding: "0.3rem",
            }}
          >
           Feasibility Conclusion <span style={{ color: "red" }}>*</span>
          </Typography>

          <Select
            name="partFeasible"
            id="partFeasible"
            label="Enter Details"
            variant="outlined"
            fullWidth
            size="small"
            onChange={handleInputChange}
          >
          <MenuItem value='Feasible With Changes'>Feasible With Changes</MenuItem>
          <MenuItem value='Part Feasible'>Part Feasible</MenuItem>
          <MenuItem value='Part Not Feasible'>Part Not Feasible</MenuItem>
          </Select>
        </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
              }}
            >
              
              Remarks
            </Typography>
            <TextField
              label="Enter Remarks"
              name="remarks"
              id="remarks"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewProductDev;
