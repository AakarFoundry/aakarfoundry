import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';

const DesignFoundry = (props) => {


  return (
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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} >
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} > Finished Wt (Machined) (Kg)  </Typography>
            <TextField
              required
              id="Finished Wt (Machined) (Kg) "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} >Net Raw Casting Wt (Kg)    </Typography>

            <TextField
              required
              id="2 Net Raw Casting Wt (Kg)   "
              label="Enter Details  "
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Surface Area - in MM Square  </Typography>

            <TextField
              required
              id="Surface Area - in MM Square "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  >Die-Casting Process </Typography>

            <TextField
              required
              id="Die-Casting Process "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  >No. of Impressions or Cavities </Typography>

            <TextField
              required
              id="No. of Impressions or Cavities "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Alternative Raw Material Suggested By Aakar  </Typography>

            <TextField
              required
              id="Alternative Raw Material Suggested By Aakar "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} > Die cost (Rs Lakhs)  </Typography>

            <TextField
              required
              id="Die cost (Rs Lakhs) "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Core Box Cost  </Typography>

            <TextField
              required
              id="Core Box Cost "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Expected Die Life (Shots) </Typography>

            <TextField
              required
              id="Expected Die Life (Shots) "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} >Die Manufacturing Period in Weeks </Typography>

            <TextField
              required
              id="Die Manufacturing Period in Weeks "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > No of shots/Hr  </Typography>

            <TextField
              required
              id="No of shots/Hr "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} > No. of Sand Cores Required  </Typography>

            <TextField
              required
              id="No. of Sand Cores Required "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Total Sand Weight (Kg)  </Typography>

            <TextField
              required
              id="Total Sand Weight (Kg) "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Remarks </Typography>
            <TextField
              label="Enter Remarks"
              id="Remark"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>



        </Grid>
        {/*<Stack direction="row" spacing={5} justifyContent="center" mt={4} sx={{ mb: 4 }}>
           <Link to={"/dash"}>
              <Button variant="contained" size="large">
                Back
              </Button>
            </Link>
            <Link to={"/rfq"}>
              <Button variant="contained" size="large"  >
                Continue
              </Button>
            </Link>

          </Stack>*/}
      </Box>
    </Container>
  );
}

export default DesignFoundry;