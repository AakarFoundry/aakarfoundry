import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";


const Rfq = (props) => {

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
                
                Part Name
              </Typography>
              <TextField
                required
                name="name"
                id="name"
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
                
                Part Number - MACH
              </Typography>

              <TextField
                required
                name="partMach"
                id="partMach"
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
                
                Part Number - CAST
              </Typography>

              <TextField
                required
                id="partCast"
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
                Project Name/Other Details
              </Typography>

              <TextField
                required
                name="details"
                id="details"
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
                Aakar Foundry Enquiry No
              </Typography>

              <TextField
                required
                name="enquiry"
                id="enquiry"
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
                
                Quantity Per Annum (Nos)
              </Typography>

              <TextField
                required
                name="quantity"
                id="quantity"
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
                
                Product Life (in Years)
              </Typography>

              <TextField
                required
                name="life"
                id="life"
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
                
                Process Required (HPDC, LPDC, GDC)
              </Typography>

              <Select
              required
              name="processRequired"
              id="processRequired"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
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
                
                Aluminum Alloy Specification
              </Typography>

              <TextField
                required
                name="alloy"
                id="alloy"
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
                Requirements - Raw or Machined
              </Typography>

              <TextField
                required
                name="machined"
                id="machined"
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
                
                Shot Blasting
              </Typography>

              <TextField
                required
                name="blasting"
                id="blasting"
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
                
                Specific Product & QC Requirements
              </Typography>

              <TextField
                required
                name="productQc"
                id="productQc"
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
                
                Anodizing Required/Chromotising Required?
              </Typography>

              <TextField
                required
                name="anodizing"
                id="anodizing"
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
                
                Power Coating Required? What Colour?
              </Typography>

              <TextField
                required
                name="coating"
                id="coating"
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
                
                Bought Out Materials Details
              </Typography>

              <TextField
                required
                name="materials"
                id="materials"
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
                Leak testing & Pressure Requirement
              </Typography>

              <TextField
                required
                name="pressure"
                id="pressure"
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
                Impregnation Required?
              </Typography>

              <TextField
                required
                name="impregnation"
                id="impregnation"
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
                
                Heat treatment Required?
              </Typography>

              <TextField
                required
                name="treatment"
                id="treatment"
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
                
                Packaging - Corrugated/PP/Plastic/Exports Grade?
              </Typography>

              <Select
              required
              name="packaging"
              id="packaging"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
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
                
                Delivery Location & Basis
              </Typography>

              <TextField
                required
                name="delivery"
                id="delivery"
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
                
                (Ex-Works /FOB/CIF/DDP/DDU)
              </Typography>

              <Select
              required
              name="works"
              id="works"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
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
                
                Annual Tonnage - MT
              </Typography>

              <TextField
                required
                name="tonnage"
                id="tonnage"
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
                
                First Sample Date
              </Typography>
              <TextField
                required
                name="sampleDate"
                id="sampleDate"
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
                
                PSW /PPAP Date
              </Typography>

              <TextField
                required
                name="pswDate"
                id="pswDate"
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
                name="remarks"
                id="remarks"
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
