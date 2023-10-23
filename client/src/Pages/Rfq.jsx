import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";


const Rfq = (props) => {

  const { selectedOption, handleOptionChange } = props;
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
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
                
                id="part-name"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="part-number-mach"
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="part-number-cast"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="project-details"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="enquiry-no"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="quantity-per-annum"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="product-life"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
              
              id="process-required"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={selectedOption}
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
                
                id="alloy-specification"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="requirements-raw-or-machined"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="shot-blasting"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="specific-product-qc-requirements"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="anodizing-required"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="power-coating-required"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="bought-out-materials-details"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="leak-testing-pressure-requirement"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="impregnation-required"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="heat-treatment-required"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
              
              id="packaging"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={selectedOption}
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
                
                id="delivery-location-basis"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
              
              id="ex-works"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={selectedOption}
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
                
                id="annual-tonnage"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="first-sample-date "
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
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
                
                id="PSW /PPAP Date "
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
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
                id="rfq-remarks"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Rfq;
