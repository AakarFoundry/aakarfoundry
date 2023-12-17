import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';
import logo from "../assets/img/Logo.png";

const Done = (props) => {
    const pdfRef = useRef();
    const [showLoader, setLoader] = useState(false);
    const downloadPDF = async () => {
        window.scrollTo(0, 0);
        setLoader(true);
    
        const pdf = new jsPDF('p', 'mm', 'a4', true);
    
        // Function to capture the entire document
        const captureDocument = async () => {
            const scale = window.innerWidth / document.body.scrollWidth;
            return html2canvas(document.body, {
                onclone: function (clonedDoc) {
                    clonedDoc.getElementById('bye').style.display = 'block';
                },
                scale: scale,
                afterClone: function (clonedDoc) {
                    return new Promise((resolve) => {
                        setTimeout(resolve, 500);
                    });
                }
            });
        };
    
        const addPage = async () => {
            const canvas = await captureDocument();
            const imgData = canvas.toDataURL('image/png') ;
            pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
            // pdf.addPage();
        };
    
        await addPage();
        // add more pages if needed
    
        // Use setTimeout to wait for the last asynchronous operation to complete
        setTimeout(() => {
            pdf.save('MultiPageDocument.pdf');
            setLoader(false);
        }, 1000); // Adjust the timeout value as needed
    };
    
    
    
    
    
    
    



    return (
        <div>

            <div id='bye' ref={pdfRef} style={{display:"none"  }}>
                
                <div style={{ fontSize: "30px", marginTop: "2px", marginLeft: "520px" }}>
                    <b>Aakar Foundry Pvt Ltd, Talegaon,Pune</b>
                    <div style={{ fontSize: "35px", marginLeft: "45px" }}>
                        <b>Enquiry Feasibility Report</b>
                    </div>
                </div>

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px" }}>
                    <b>Customer Details</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Customer Name:</b> Bhavin Shah 
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '105px', width: '480px' }}>
                        <b>Customer Reference:</b> Existing
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '145px', width: '750px' }}>
                        <b>Contact Person:</b> 7722006999
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Delivery Address:</b> Pune
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Enquiry Date:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '145px', width: '750px' }}>
                        <b>Category:</b> Engineering Change Node
                    </div>
                </div>
                <div style={{ fontSize: '25px', marginLeft: '65px', width: '750px' }}>
                    <b>Design Path:</b> D:\Project
                </div>




                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>RFQ Details</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>


                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Part Name:</b> Thermostat housing
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Part Number - MACH:</b> 006045547U01
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Part Number - CAST :</b> Engineering Change Node
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Finish Weight :</b> Pune
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Raw Casting Weight:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Project Name/Other Details :</b> Trem V NEF 4 Cylinder
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Rfq Enquiry No:</b> 3101
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Quantity Per Annum (Nos) :</b> 44875
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Product Life (In Years):</b> 5 years
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Process Required (HPDC, LPDC, GDC):</b> HPDC
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Aluminum Alloy Specification:</b> MACG16 A5 PER M7M STANDARD G-00-0128
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Requirements:</b> MACHINED
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Shot Blasting:</b> Pune
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Specific Product & QC Requirements :</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Surface Treatment:</b> NA
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Surface Treatment Specification:</b> NA
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Bought Out Materials Details:</b> NA
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Leak Testing & Pressure Requirement :</b> 2 Bar Air Pressure
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Impregnation Required?:</b> Allowed Once
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Heat Treatment Required?:</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Packaging Type :</b> PP Box
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Specify If Custom Packaging:</b>
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Delivery Location & Basis:</b>Nagpur
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Inco-Terms :</b> Ex-Works
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Annual Tonnage - MT :</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Remarks:</b> 12/5/23
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Risk Analysis</b>
                </div>


                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Is There Any Risk Associated?:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Manufacturing Requirement:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Application:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Internal Estimation:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Environmental:</b> Yes
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Environmental Remarks:</b> NA
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Investment:</b> No
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Investmental Remarks:</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Manufacturing:</b> No
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Manufacturing Remarks :</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Technical Feasibility:</b> Yes
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Technical Feasibility Remarks:</b> N/A
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Estimation :</b> No
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Estimation Remarks:</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Regret:</b> Yes
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Regret Remarks :</b> N/A
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Remarks:</b> N/A
                    </div>
                </div>

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Design & Foundry</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Finished Weight (Machined) (Kg):</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Net Raw Casting Weight (Kg):</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Surface Area - In mm Square:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die-Casting Process:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>No. Of Impressions Or Cavities:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Alternative Raw Material Suggested By Aakar :</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die Cost (Rs Lakhs):</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Core Box Cost:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Expected Die Life (Shots):</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die Manufacturing Period In Weeks:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Number Of Shots/Hour:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>No. Of Sand Cores Required:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Total Sand Weight (Kg) :</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Remarks:</b> 12/5/23
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Machining & Quality</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Machine Type:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Cycle time:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Machine Type:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Cycle time:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Machine Type:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Cycle time:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Machine Type:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Cycle time:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> 12/5/23
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Inspection Gauges Cost:</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Leak Testing Fixture Cost:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Washing Fixture Cost:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Plastic Protection Cap Costs (Specify Quantity & Cost): </b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Packaging Type?:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> 12/5/23
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Machine Type</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Packaging Cost :</b> 12/5/23
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b> Quality Remarks:</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b> Machining Remarks:</b> 22.88
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>New Product Development</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Capital Investment For Machines</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Feasibility Conclusion :</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Remarks:</b> 12/5/23
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Summary</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Name</b>
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Department</b>
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Time</b>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        Vinayak Joshi
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        Information Technology
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        26 Oct 2023 1:45 PM
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        Vinayak Joshi
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        Information Technology
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        26 Oct 2023 1:45 PM
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        Vinayak Joshi
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        Information Technology
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        26 Oct 2023 1:45 PM
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        Vinayak Joshi
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        Information Technology
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        26 Oct 2023 1:45 PM
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        Vinayak Joshi
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        Information Technology
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        26 Oct 2023 1:45 PM
                    </div>
                </div>

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>New Product Development</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Capital Investment For Machines</b> 22.88
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Feasibility Conclusion :</b> 12/5/23
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Remarks:</b> 12/5/23
                    </div>
                </div>
             




            </div>
            <button onClick={downloadPDF}>Download PDF</button>
        </div >
    );
}

export default Done;