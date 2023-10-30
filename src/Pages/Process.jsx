import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HorizontalLinearStepper from "../Components/Stepper";
import CustomerName from "./CustomerName";
import RiskAnalysis from "./RiskAnalysis";
import DesignFoundry from "./Design";
import { Stack } from "@mui/material";
import Machine from "./machine";
import styles from "../assets/styles/Form.module.css";
import Inputs from "./Inputs";
import NewProductDev from "./NewProduct";
import Quality from "./Quality";


const Process = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const activeStepFromQuery = parseInt(searchParams.get("step"), 10) || 0;
  const selectedOptionFromQuery = searchParams.get("option") || "RFQ";
  const [activeStep, setActiveStep] = useState(activeStepFromQuery);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState(selectedOptionFromQuery);


  const [details, setDetails] = useState({
    customerName: '',
    customerReference: '',
    contact: '',
    delivery: '',
    enquiry: '',
    path: '',
    category: ''
  }
  );



  const initialInputDetails = selectedOption === "RFQ"
    ? {
      name: '',
      partMach: '',
      partCast: '',
      finishWeight:'',
      castingWeight:'',
      details: '',
      enquiry: '',
      quantity: '',
      life: '',
      processRequired: '',
      alloy: '',
      machined: '',
      blasting: '',
      productQc: '',
      surfaceTreatment: [],
      treatmentSpecification:[],
      materials: '',
      pressure: '',
      impregnation: '',
      treatment: '',
      packaging: '',
      custom:'',
      delivery: '',
      works: '',
      tonnage: '',
      remarks: ''
    }
    : {
      ecnNo: '',
      partName: '',
      number: '',
      weight: '',
      projectName: '',
      ecnType: '',

    };

  const [inputDetails, setInputDetails] = useState(initialInputDetails);

  const [designDetails, setDesignDetails] = useState({
    weight: '',
    casting: '',
    area: '',
    dieCasting: '',
    impressions: '',
    rawMaterial: '',
    dieCost: '',
    coreCOst: '',
    dieLife: '',
    diePeriod: '',
    shots: '',
    cores: '',
    sandWeight: '',
    remarks: '',
  }
  );

  const [riskDetails, setRiskDetails] = useState({
    risk: '',
    requirement: '',
    application: '',
    internal:'',
    estimation: '',
    environment: '',
    environment_remarks: '',
    investment:'',
    investment_remarks:'',
    manufacturing:'',
    manufacturing_remarks:'',
    technical:'',
    technical_remarks:'',
    estimation:'',
    estimation_remarks:'',
    regret:'',
    regret_remarks:'',
    remarks_extra:'',
  }
  );

  const [qualityDetails,setQualityDetails]= useState({
    gaugesCost:'',
    leakCost:'',
    washingCost:'',
    capCost:'',
    packagingType:'',
    packagingCost:'',
    remarks:'',

  });

  const[npdDetails,setNpdDetails]=useState({
      investment:'',
      partFeasible:'',
      remarks:'',
  });

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      console.log(details);
    } else if (activeStep === 1) {
      console.log(inputDetails);
    } else if (activeStep === 2) {
      console.log(riskDetails);
    } else if (activeStep === 3) {
      console.log(designDetails);
    }else if (activeStep === 5) {
      console.log(qualityDetails);
    }else if (activeStep === 6) {
      console.log(npdDetails);
  }


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
    <div className={styles.process}>
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className={styles.designForm}>
        {activeStep === 0 && (
          <CustomerName
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            details={details}
            setDetails={setDetails}
          />
        )}
        {activeStep === 1 &&
          < Inputs
            selectedOption={selectedOption}
            inputDetails={inputDetails}
            setInputDetails={setInputDetails}

          />}
        {activeStep === 2 &&
          < RiskAnalysis
            riskDetails={riskDetails}
            setRiskDetails={setRiskDetails}
          />}
        {activeStep === 3 &&
          <DesignFoundry
            designDetails={designDetails}
            setDesignDetails={setDesignDetails}
          />}
        {activeStep === 4 && <Machine />}
        {activeStep === 5 && (
          <Quality 
            qualityDetails={qualityDetails}
            setQualityDetails={setQualityDetails}
          />
        )}
        {activeStep === 6 && (
          <NewProductDev
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            npdDetails={npdDetails}
            setNpdDetails={setNpdDetails}
          />
        )}
        {activeStep === 7 ? (
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
