import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";

const CustomerName = (props) => {

  const { selectedOption, handleOptionChange } = props;

  const [formData, setFormData] = useState({
    customerName: "",
    customerReference: "",
    contact: "",
    delivery: "",
    enquiry: "",
    path: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for category dropdown change
  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setFormData({
      ...formData,
      category: categoryValue,
    });
    handleOptionChange(categoryValue);
  };

  // Log form data to the console
  console.log("Form Data:", formData);


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
              
              Customer Name <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="customerName"
              id="customerName"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.customerName}
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
              
              Customer Reference <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="customerReference"
              id="customerReference"
              label="Enter Details "
              variant="outlined"
              fullWidth
              size="small"
              value={formData.customerReference}
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
              
              Contact Person <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="contact"
              id="contact"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.contact}
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
              
              Delivery Address <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="delivery"
              id="delivery"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.delivery}
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
              
              Enquiry Date <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="enquiry"
              id="enquiry"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.enquiry}
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
              
           Path <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="path"
              id="path"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.path}
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
              
              Category <span style={{ color: "red" }}>*</span> 
            </Typography>
            <Select
              
              name="category"
              id="category"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={selectedOption}
              onChange={(e) => {
                handleOptionChange(e.target.value);
              }}
            >
              <MenuItem value="RFQ">RFQ</MenuItem>
              <MenuItem value="ECN">ECN</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default CustomerName;
