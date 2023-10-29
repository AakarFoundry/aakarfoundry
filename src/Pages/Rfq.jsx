import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState ,useEffect} from "react";

const Rfq = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    partMach:"",
    partCast: "",
    details: "",
    enquiry: "",
    quantity: "",
    life: "",
    processRequired: "",
    alloy: "",
    machined: "",
    blasting: "",
    productQc: "",
    anodizing: "",
    coating: "",
    materials: "",
    pressure: "",
    impregnation: "",
    treatment:"",
    packaging: "",
    delivery: "",
    works: "",
    tonnage: "",
    sampleDate: "",
    pswDate: "",
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
    <div>
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
                
                Part Name <span style={{ color: "red" }}>*</span> 
              </Typography>
              <TextField

                name="name"
                id="name"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.name}
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
                
                Part Number - MACH <span style={{ color: "red" }}>*</span> 
              </Typography>
              <TextField
                
                name="partMach"
                id="partMach"
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
                value={formData.partMach}
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
                
                Part Number - CAST <span style={{ color: "red" }}>*</span> 
              </Typography>


              <TextField
                name="partCast"
                id="partCast"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.partCast}
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
                Project Name/Other Details <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                
                name="details"
                id="details"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.details}
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
                Aakar Foundry Enquiry No <span style={{ color: "red" }}>*</span> 
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
                
                Quantity Per Annum (Nos) <span style={{ color: "red" }}>*</span> 
              </Typography>
              <TextField

                name="quantity"
                id="quantity"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.quantity}
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
                
                Product Life (in Years) <span style={{ color: "red" }}>*</span> 
              </Typography>


              <TextField

                name="life"
                id="life"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.life}
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
                {" "}
                Process Required (HPDC, LPDC, GDC) <span style={{ color: "red" }}>*</span> 
              </Typography>

              <Select
              name="processRequired"
              id="processRequired"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.processRequired}
              onChange={handleInputChange}
            >
              <MenuItem value="HPDC">HPDC</MenuItem>
              <MenuItem value="LPDC">LPDC</MenuItem>
              <MenuItem value="GDC">GDC</MenuItem>
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
                {" "}
                Aluminum Alloy Specification <span style={{ color: "red" }}>*</span> 
              </Typography>
              <TextField
                
                name="alloy"
                id="alloy"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.alloy}
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
                Requirements - Raw or Machined <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                
                name="machined"
                id="machined"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.machined}
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
                
                Shot Blasting <span style={{ color: "red" }}>*</span> 
              </Typography>


              <TextField
                name="blasting"
                id="blasting"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.blasting}
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
                
                Specific Product & QC Requirements <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                name="productQc"
                id="productQc"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.productQc}
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
                
                Anodizing Required/Chromotising Required? <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField

                name="anodizing"
                id="anodizing"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.anodizing}
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
                
                Power Coating Required? What Colour? <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                name="coating"
                id="coating"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.coating}
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
                
                Bought Out Materials Details <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField

                name="materials"
                id="materials"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.materials}
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
                Leak testing & Pressure Requirement <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                
                name="pressure"
                id="pressure"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.pressure}
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
                Impregnation Required? <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                name="impregnation"
                id="impregnation"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.impregnation}
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
                {" "}
                Heat treatment Required?<span style={{ color: "red" }}>*</span> 
              </Typography>
              <TextField

                name="treatment"
                id="treatment"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.treatment}
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
                
                Packaging - Corrugated/PP/Plastic/Exports Grade? <span style={{ color: "red" }}>*</span> 
              </Typography>

              <Select
              name="packaging"
              id="packaging"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.packaging}
              onChange={handleInputChange}
            >
              <MenuItem value="Corrugated">Corrugated</MenuItem>
              <MenuItem value="PP">PP</MenuItem>
              <MenuItem value="Plastic">Plastic</MenuItem>
              <MenuItem value="Exports">Exports</MenuItem>
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
                
                Delivery Location & Basis <span style={{ color: "red" }}>*</span> 
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
                
                (Ex-Works /FOB/CIF/DDP/DDU) <span style={{ color: "red" }}>*</span> 
              </Typography>
              <Select
              
              name="works"
              id="works"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.works}
              onChange={handleInputChange}
            >
              <MenuItem value="FOB">FOB</MenuItem>
              <MenuItem value="CIF">CIF</MenuItem>
              <MenuItem value="DDP">DDP</MenuItem>
              <MenuItem value="DDU">DDU</MenuItem>
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
              
                Annual Tonnage - MT <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField

                name="tonnage"
                id="tonnage"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.tonnage}
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
                
                First Sample Date <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField

                name="sampleDate"
                id="sampleDate"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.sampleDate}
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
                }}
              >
                
                PSW /PPAP Date <span style={{ color: "red" }}>*</span> 
              </Typography>

              <TextField
                name="pswDate"
                id="pswDate"
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
                value={formData.pswDate}
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
    </div>
  );
};

export default Rfq;
