import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';




export function MachineQuality() {

  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 30,
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
    <Grid item xs={12} sm={6} >
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Machine Type - CNC/VMC/HMC Please Specify * </Typography>
      <TextField
        required
        id="Machine Type - CNC/VMC/HMC Please Specify *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small" 
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Machining cycle time (Rs/Pc) * </Typography>

      <TextField
        required
        id="Machining cycle time (Rs/Pc) *"
        label="Enter Details  "
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Machining Fixture cost (One time Inv) *</Typography>

      <TextField
        required
        id="Machining Fixture cost (One time Inv) *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Inspection Gauges Cost *</Typography>

      <TextField
        required
        id="Inspection Gauges Cost *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Leak testing fixture cost *</Typography>

      <TextField
        required
        id="Leak testing fixture cost *"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Washing fixture cost *</Typography>

      <TextField
        required
        id="Washing fixture cost *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Plastic Protection Cap Costs (Specify Quantity & Cost) * </Typography>

      <TextField
        required
        id="Plastic Protection Cap Costs (Specify Quantity & Cost) *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Packaging Cost-(Corrugated/PP/Plastic/Exports Grade) * </Typography>

      <TextField
        required
        id="Packaging Cost-(Corrugated/PP/Plastic/Exports Grade) *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Remark </Typography>
  <TextField
  required
  id="Remark"
 variant="outlined"
  fullWidth
  size="small"
  />
</Grid>
    
    
    
    
  </Grid>
  <Stack direction="row" spacing={5} justifyContent="center"  mt={4} sx={{ mb: 4 }}>
  <Link to={"/design"}>
  <Button variant="contained"  size="large">
    Back
  </Button>
  </Link>
        <Link to={"/prod"}>
        <Button variant="contained" size="large" >
        Continue
        </Button>
        </Link>
      </Stack>
</Box>
</Container>
  );
}
