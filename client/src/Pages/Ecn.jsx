import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
const Ecn = (props) => {
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
                Aakar Foundry Enquiry No
              </Typography>
              <TextField
                required
                name="enquiryNo"
                id="enquiryNo"
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
                Aakar Foundry Enquiry No - ECN
              </Typography>

              <TextField
                required
                name="ecnNo"
                id="ecnNo"
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
                Part Name
              </Typography>

              <TextField
                required
                name="partName"
                id="partName"
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
                Part Number - Finish
              </Typography>

              <TextField
                required
                name="number"
                id="number"
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
                Finish Weight
              </Typography>

              <TextField
                required
                name="weight"
                id="weight"
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
                Project Name/Other Details
              </Typography>

              <TextField
                required
                name="projectName"
                id="projectName"
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
                What type of ECN (Change in)
              </Typography>

              <TextField
                required
                name="ecn"
                id="type"
                label="Enter Details"
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

export default Ecn;
