import React from 'react';
import { Button } from 'reactstrap';
import jsPDF from 'jspdf';
import logo from '../assets/img/Logo.png';

export const Test2 = () => {

  const pdfGenerate = () => {
    var doc = new jsPDF('portrait', 'px', 'a4', 'false');
    
    const maxWidth = 120;
    const bigWidth = 300;
    const small = 180;
    
    doc.addImage(logo, 'PNG', 20, 10, 70, 35); 
    doc.setFont('Helvetica');
    doc.setFontSize(12);
    doc.text(150, 20, 'Aakar Foundry Pvt Ltd, Talegaon, Pune');
    doc.text(170, 30, 'Enquiry Feasibility Report');
    doc.setFontSize(11);


    const lineWidth = 80; 
    doc.text(20, 58, 'Customer Details' );
    doc.line(10, 62, 435, 62);
    doc.setFontSize(10);


    
    doc.text(20, 70, 'Customer Name: Bhavin Pankaj Shah', { maxWidth });
    doc.text(170, 70, 'Customer Reference: Existing', { maxWidth });
    doc.text(300, 70, 'Contact Person: Mr. Vinayak Joshi', { maxWidth });

    doc.text(20, 90, 'Delivery Address: Pune', { maxWidth });
    doc.text(170, 90, 'Enquiry Date: 12/5/23', { maxWidth });
    doc.text(300, 90, 'Category: ECN', { maxWidth });
    doc.text(20, 110, 'Design Path: D:\Project', { bigWidth }); // Escape backslashes properly

    


    doc.text(20, 130, 'RFQ Details' );
    doc.line(10, 134, 435, 134);
    doc.setFontSize(10);

    doc.text(20, 142, 'Enquiry No: 3001 ', { maxWidth });
    doc.text(170, 142, 'Part Name: Thermostat housing', { maxWidth });
    doc.text(300, 142, 'Part Number - MACH::006045547U01', { maxWidth });

    doc.text(20, 162, 'Part Number - CAST: Pune', { maxWidth });
    doc.text(170, 162, 'Enquiry Date: 12/5/23', { maxWidth });
    doc.text(300, 162, 'Finish Weight : Pune', { maxWidth });

    doc.text(20, 182, 'Raw Casting Weight: 12/5/23', { maxWidth });
    doc.text(170, 182, 'Project Name/Other Details :Trem V NEF 4 Cylinder', { maxWidth });
    doc.text(300, 182, 'Quantity Per Annum (Nos) : 44875', { maxWidth });
    
    doc.text(20, 202, 'Product Life (In Years):5 years', { maxWidth });
    doc.text(170, 202, 'Category: Engineering Change Node', { maxWidth });
    doc.text(300, 202, 'Process Required (HPDC, LPDC, GDC):HPDC', { maxWidth });
    
    doc.text(20, 222, 'Inco-Terms:', { maxWidth });
    doc.text(170, 222, 'Requirements: MACHINED', { maxWidth });
    doc.text(300, 222, 'Shot Blasting:HPDC', { maxWidth });

    doc.text(20, 242, 'Specific Product & QC Requirements: ', { maxWidth });
    doc.text(170, 242, 'Bought Out Materials Details:', { maxWidth });
    doc.text(300, 242, 'Leak Testing & Pressure Requirement: ', { maxWidth });
    
    doc.text(20, 262, 'Impregnation Required:', { maxWidth });
    doc.text(170, 262, 'Heat Treatment Required?: MACHINED', { maxWidth });
    doc.text(300, 262, 'Packaging Type :HPDC', { maxWidth });
 
    doc.text(20, 282, 'Specify If Custom Packaging:', { maxWidth });
    doc.text(170, 282, 'Delivery Location & Basis: ', { maxWidth });
    doc.text(300, 282, 'Aluminum Alloy Specification: MACG16 A5 PER M7M STANDARD G-00-0128', { maxWidth });

    doc.text(20, 302, 'Annual Tonnage - MT:', { maxWidth });
    
    doc.text(20, 322, 'Remark:', { bigWidth });

  

    doc.text(20, 342, 'Risk Analysis' );
    doc.line(10, 346, 435, 346);
    doc.setFontSize(10);

    doc.text(20, 354, 'Is There Any Risk Associated?:', { maxWidth });
    doc.text(170, 354, 'Manufacturing Requirement: ', { maxWidth });
    doc.text(300, 354, 'Application:', { maxWidth });

    doc.text(20, 374, 'Internal Estimation:', { maxWidth });
    doc.text(170, 374, 'Environmental: ', { maxWidth });
    doc.text(300, 374, 'Investment:', { maxWidth });

    doc.text(20, 394, 'Manufacturing:', { maxWidth });
    doc.text(170, 394, 'Technical Feasibility:', { maxWidth });
    doc.text(300, 394, 'Estimation:', { maxWidth });

    doc.text(20, 414, 'Regret:', { maxWidth });
    


    
    doc.text(20, 474, 'Design & Foundry' );
    doc.line(10, 478, 435, 478);
    doc.setFontSize(10);

    
    doc.save('a.pdf');
  }

  return (
    <>
      <Button onClick={pdfGenerate}>Download</Button>
    </>
  );
};
