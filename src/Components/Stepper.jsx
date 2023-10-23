import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
const HorizontalLinearStepper = (props) => {
  const { activeStep } = props;
  const isMobile = window.innerWidth <= 768;
  const steps = isMobile
    ? ["", "", "", "", "", "", ""]
    : [
        "Details",
        "RFQ/ECN",
        "Risk Analysis",
        "Design & foundry",
        "Machine Quality",
        "NPD",
        "Approval"
      ];
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 16,
        "@media screen and (min-width: 64em)": { marginLeft: 28, width: "70%" },
      }}
    >
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
};
export default HorizontalLinearStepper;
