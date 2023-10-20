import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HorizontalLinearStepper from "../Components/Stepper";
import CustomerName from "./customerName";
import RfqAttrributes from "./RfqAttributes";
import RiskAnalysis from "./RiskAnalysis";
import DesignFoundary from "./design";
import { Stack } from '@mui/material';
import MachineQuality from "./machine";
import styles from "../assets/styles/Form.module.css";


const Process = (props) => {
    const steps = ['Details', 'RFQ', 'Risk Analysis', 'Design & foundry', 'Machine Quality', 'NPD'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} />
            <div className={styles.designForm}>
                {activeStep === 0 && <CustomerName />}
                {activeStep === 1 && <RfqAttrributes />}
                {activeStep === 2 && <RiskAnalysis />}
                {activeStep === 3 && <DesignFoundary />}
                {activeStep === 4 && <MachineQuality activeStep={activeStep} setActiveStep={setActiveStep} />}
                {activeStep === 5 ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>

                    </React.Fragment>
                ) : (
                    <div>
                        <React.Fragment>

                            <Stack direction="row" spacing={5} justifyContent="center" mt={4} sx={{ mb: 4 }}>
                             
                                    <Button variant="contained" size="large" onClick={handleBack}  disabled={activeStep === 0}>
                                        Back
                                    </Button>
                            
                               
                                    <Button variant="contained" size="large" onClick={handleNext} >
                                        Continue
                                    </Button>
                              

                            </Stack>
                        </React.Fragment>
                    </div>
                )}
            </div>
        </div>
    )

}
export default Process;