import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";
const CustomerName = (props) => {
  const { selectedOption, handleOptionChange } = props;

  return (
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
              required
              name="customerName"
              id="customerName"
              label="Enter Details"
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
              
              Customer Reference <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              required
              name="customerReference"
              id="customerReference"
              label="Enter Details "
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
              
              Contact Person <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              required
              name="contact"
              id="contact"
              label="Enter Details"
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
              
              Delivery Address <span style={{ color: "red" }}>*</span> 
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
              required
              name="enquiry"
              id="enquiry"
              label=" Enter Details"
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
              
           Path <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              required
              name="path"
              id="path"
              label=" Enter Details"
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
              
              Category <span style={{ color: "red" }}>*</span> 
            </Typography>
            <Select
              required
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
