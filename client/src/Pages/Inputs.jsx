import React from 'react';
import Rfq from './Rfq'; // Import the RFQ component
import Ecn from './Ecn'; // Import the ECN component

const Inputs = ({ selectedOption }) => {
    // Conditionally render the RFQ or ECN component based on the selected option
    if (selectedOption === 'RFQ') {
        return <Rfq />;
    } else if (selectedOption === 'ECN') {
        return <Ecn />;
    } else {
        return null; // You can return a default component or handle other cases here
    }
};

export default Inputs;
