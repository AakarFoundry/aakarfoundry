import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HorizontalLinearStepper from "../Components/Stepper";
import CustomerName from "./CustomerName";
import RiskAnalysis from "./RiskAnalysis";
import DesignFoundry from "./design";
import { Stack } from "@mui/material";
import MachineQuality from "./machine";
import styles from "../assets/styles/Form.module.css";
import Inputs from "./Inputs";
const Process = (props) => {
  const steps = [
    "Details",
    "RFQ",
    "Risk Analysis",
    "Design & foundry",
    "Machine Quality",
    "NPD",
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const activeStepFromQuery = parseInt(searchParams.get("step"), 10) || 0;
  const selectedOptionFromQuery = searchParams.get("option") || "RFQ";

  const [activeStep, setActiveStep] = useState(activeStepFromQuery);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState(selectedOptionFromQuery); 

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    const nextStep = activeStep + 1;
    navigate(`/details?step=${nextStep}&option=${selectedOption}`); 
    setActiveStep(nextStep);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    const previousStep = activeStep - 1;
    if (previousStep >= 0) {
      navigate(`/details?step=${previousStep}&option=${selectedOption}`); 
      setActiveStep(previousStep);
    }
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    navigate(`/details?step=${activeStep}&option=${option}`);
  };
  useEffect(() => {
    navigate(`/details?step=${activeStep}&option=${selectedOption}`); 
  }, [activeStep, selectedOption, navigate]);

  return (
    <div>
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
      />
      <div className={styles.designForm}>
        {activeStep === 0 && (
          <CustomerName
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        )}
        {activeStep === 1 && <Inputs selectedOption={selectedOption} />}
        {activeStep === 2 && <RiskAnalysis />}
        {activeStep === 3 && <DesignFoundry />}
        {activeStep === 4 && (
          <MachineQuality
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 5 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <div>
            <React.Fragment>
              <Stack
                direction="row"
                spacing={5}
                justifyContent="center"
                mt={4}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button variant="contained" size="large" onClick={handleNext}>
                  Continue
                </Button>
              </Stack>
            </React.Fragment>
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;
