import React from "react";
import Rfq from "./Rfq"; 
import Ecn from "./Ecn"; 

const Inputs = ({ selectedOption }) => {

  if (selectedOption === "RFQ") {
    return <Rfq />;
  } else if (selectedOption === "ECN") {
    return <Ecn />;
  } else {
    return null; 
  }
};

export default Inputs;
