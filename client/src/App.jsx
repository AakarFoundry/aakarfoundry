
import './App.css'
import { CustomerName } from './Pages/customerName'
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { RfqAttributes } from './Pages/RfqAttributes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RiskAnalysis } from './Pages/RiskAnalysis';
import { DesignFoundary } from './Pages/design';
import { MachineQuality } from './Pages/machine';
import { NewProductDev } from './Pages/newproduct';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element = {<Register/>}/>
        <Route path ="/customer" element={<CustomerName />} />
        <Route path = "/rfq" element = { <RfqAttributes /> } />
        <Route path = "/risk" element = {<RiskAnalysis/>} />
        <Route path = "/design" element = {<DesignFoundary/>} />
        <Route path = "/machine" element = {<MachineQuality/>} />
        <Route path = "/prod" element = {<NewProductDev/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
