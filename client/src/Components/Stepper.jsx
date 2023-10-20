import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const HorizontalLinearStepper = (props) => {
  const { activeStep } = props;
  const steps = ['Details', 'RFQ', 'Risk Analysis', 'Design & foundry', 'Machine Quality', 'NPD'];

  return (
    <Box sx={{ width: '70%', marginTop: 16,'@media screen and (min-width: 64em)': {marginLeft:28}}}>
      <Stepper activeStep={props.activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    
   
    </Box>
  );
}

export default HorizontalLinearStepper;
