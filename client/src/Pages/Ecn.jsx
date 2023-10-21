import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';
const Rfq = (props) => {
  return (
    <div>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
          mb: 2,

        }}
      >

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="on"
        >
          <Grid
            container
            spacing={4}
          >
            <Grid item xs={12} sm={6} >
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Aakar Foundry Enquiry No
              </Typography>
              <TextField
                required
                id="enquiry-no"
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Aakar Foundry Enquiry No - ECN
              </Typography>

              <TextField
                required
                id="enquiry-no-ecn"
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Part Name
              </Typography>

              <TextField
                required
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Part Number - Finish
              </Typography>

              <TextField
                required
                id="part-no-finish"
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Finish Weight
              </Typography>

              <TextField
                required
                id="finish-weight"
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                Project Name/Other Details
              </Typography>

              <TextField
                required
                id="project-name"
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
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem'
                }}
              >
                What type of ECN (Change in)
              </Typography>

              <TextField
                required
                id="ecn-change"
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
}

export default Rfq;