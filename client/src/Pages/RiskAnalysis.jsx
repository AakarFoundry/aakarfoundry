import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RiskAnalysis=(props)=> {

  
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
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Manufacturing Requirement * </Typography>

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
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Internal Estimation </Typography>
     <TextField
        required
        id="Internal Estimation *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>

    

    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.25rem', padding:'0.3rem'}}>Risk</Typography>
     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.15rem', padding:'0.3rem'}}>Enviorment:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    
    <TextField
      label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.1rem', padding:'0.3rem'}}>Investment:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    <TextField
        
        label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.1rem', padding:'0.3rem'}}>Manufacturing:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    <TextField
        
        label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />
</Grid>
    
<Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.25rem', padding:'0.3rem'}}>Guidelines</Typography>
     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.15rem', padding:'0.3rem'}}>Technical Feasibiltiy:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    
    <TextField
        
        label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.1rem', padding:'0.3rem'}}>Estimation:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    <TextField
        
        label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', color: '#054470',fontWeight: '450', fontSize: '1.1rem', padding:'0.3rem'}}>Regrade:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="NO" control={<Radio />} label="No" />
       </RadioGroup>
    </FormControl>
    <TextField
        
        label="Add Remarks"
        variant="outlined"
        fullWidth
        size="small"
      />
</Grid>

  
  

      
 
  
 <Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Remarks </Typography>
  <TextField
  required
  id="Remark"
  label="Enter Remarks"
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

export default RiskAnalysis;
