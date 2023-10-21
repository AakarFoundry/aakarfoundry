import './App.css'
import NavBar from './Components/NavBar';
import CustomerName from './Pages/CustomerName'
import Dashboard from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { Register } from './Pages/register';
// import RfqAttributes from './Pages/RfqAttributes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RiskAnalysis from './Pages/RiskAnalysis';
import DesignFoundary from './Pages/design';
import MachineQuality from './Pages/machine';
import NewProductDev from './Pages/newproduct';
import Process from './Pages/Process';
import HorizontalLinearStepper from './Components/Stepper';
import Approval from './Pages/Approval';
function App() {
  return (
    <>

      <Router>
        {window.location.pathname !== "/" && window.location.pathname !== "/register" ? <NavBar /> : <> </>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/details" element={<Process />} />
          {/* <Route path="/customer" element={<CustomerName />} />
          <Route path="/rfq" element={<RfqAttributes />} />
          <Route path="/risk" element={<RiskAnalysis />} />
          <Route path="/design" element={<DesignFoundary />} />
          <Route path="/machine" element={<MachineQuality />} />
          <Route path="/prod" element={<NewProductDev />} /> */}
          <Route path="/approval" element={<Approval />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
