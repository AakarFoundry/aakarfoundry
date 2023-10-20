import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const NewProductDev=(props)=> {

  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        mb:2,
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
   <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Capital Investment for machines </Typography>

      <TextField
        required
        id="Capital Investment for machines "
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Part Feasible </Typography>

      <TextField
        required
        id="Part Feasible "
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Feasible with changes </Typography>

      <TextField
        required
        id="Feasible with changes "
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Part Not Feasible Design and Foundry Machine and Quality New Product Development</Typography>

      <TextField
        required
        id="Part Not Feasible Design and Foundry Machine and Quality New Product Development "
        label="Enter Details"
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

export default NewProductDev;