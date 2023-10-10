import './App.css'
import NavBar from './Components/NavBar';
import { CustomerName } from './Pages/customerName'
import Dashboard from './Pages/dashBoard';
import { Login } from './Pages/Login';
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
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element = {<Register/>}/>
        <Route path ="/customer" element={<CustomerName />} />
        <Route path = "/rfq" element = { <RfqAttributes /> } />
        <Route path = "/dash" element = { <Dashboard /> } />

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
