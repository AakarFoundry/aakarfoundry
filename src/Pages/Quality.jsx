import React from 'react'
import { Container,Box,Grid,Typography,TextField, Select, MenuItem } from '@mui/material';

const Quality = (props) => {

  const { qualityDetails, setQualityDetails } = props;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setQualityDetails({
      ...qualityDetails,
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
              Inspection Gauges Cost <span style={{ color: "red" }}>*</span> 
            </Typography>

            <TextField
              
              name="gaugesCost"
              id="gaugesCost"
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
              Leak Testing Fixture Cost <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="leakCost"
              id="leakCost"
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
              
              Washing Fixture Cost <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="washingCost"
              id="washingCost"
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
              
              Plastic Protection Cap Costs (Specify Quantity & Cost) <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField

              name="capCost"
              id="capCost"
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
            
            Packaging Type? <span style={{ color: "red" }}>*</span> 
          </Typography>
          <Select
          name="packagingType"
          id="packagingType"
          label="Category"
          variant="outlined"
          fullWidth
          size="small"
          onChange={handleInputChange}
          defaultValue=''
          value={qualityDetails.packageType}
        >
          <MenuItem value="Corrugated">Corrugated</MenuItem>
          <MenuItem value="PP">PP</MenuItem>
          <MenuItem value="Plastic">Plastic</MenuItem>
          <MenuItem value="Exports Grade">Exports Grade</MenuItem>
        </Select>
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
              
              Packaging Cost <span style={{ color: "red" }}>*</span> 
            </Typography>

            <TextField

              name="packagingCost"
              id="packagingCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
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
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        </Box>
        </Container>
  )
};

export default Quality;