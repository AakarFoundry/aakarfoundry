import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Menu, MenuItem, Select, Typography } from "@mui/material";
const CustomerName = (props) => {
  
  const { selectedOption, handleOptionChange, details, setDetails } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    setDetails({
      ...details,
      category: value
    });

    handleOptionChange(value);
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
              value = {details.customerName}
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

              Customer Reference <span style={{ color: "red" }}>*</span>
            </Typography>
            <Select

              name="customerReference"
              id="customerReference"
              label="Enter Details "
              variant="outlined"
              fullWidth
              size="small"
              value={details.customerReference}
              onChange={handleInputChange}
              // defaultValue=""
            >
              <MenuItem value='Existing'>Existing</MenuItem>
              <MenuItem value='New'>New</MenuItem>
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
              value={details.contact}
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

              Delivery Address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="delivery"
              id="delivery"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={details.delivery}
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

              Enquiry Date <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="enquiry"
              id="enquiry"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
              value={details.enquiry}

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

              Design Data Path <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="path"
              id="path"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
              value={details.path}

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

              Category <span style={{ color: "red" }}>*</span>
            </Typography>
            <Select

              name="category"
              id="category"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={details.category}
              onChange={handleSelectChange}
              defaultValue=""
            >
              <MenuItem value="RFQ">Request For Quotation</MenuItem>
              <MenuItem value="ECN">Engineering Change Node</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default CustomerName;
