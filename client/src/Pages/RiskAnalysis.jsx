import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';




export function RiskAnalysis() {

  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
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
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Is there any risk associated with : (ü/û) * </Typography>
      <TextField
        required
        id="Is there any risk associated with : (ü/û) *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small" 
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Manufacturing Requirement * </Typography>

      <TextField
        required
        id=" Manufacturing Requirement *"
        label="Enter Details  "
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Application *</Typography>

      <TextField
        required
        id="Application *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Internal Estimation *</Typography>

      <TextField
        required
        id="Internal Estimation *"
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
        <Button variant="contained"  size="large">
          Back
        </Button>
        <Button variant="contained" size="large" >
        Continue
        </Button>
      </Stack>
</Box>
</Container>
  );
}
