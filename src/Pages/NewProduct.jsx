import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const NewProductDev = (props) => {
  const [formData, setFormData] = useState({
    investment: "",
    partFeasible:"",
    changes: "",
    development: "",
    remarks: "",
  });

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Effect to log form data whenever formData changes
  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

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
              
              Capital Investment for machines <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="investment"
              id="investment "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.investment}
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
              Part Feasible <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="partFeasible"
              id="partFeasible"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.partFeasible}
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
              Feasible with changes <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="changes"
              id="changes"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.changes}
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
              
              Part Not Feasible Design and Foundry Machine and Quality New
              Product Development <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="development"
              id="development"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.development}
              onChange={handleInputChange}
            />
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
              value={formData.remarks}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewProductDev;
