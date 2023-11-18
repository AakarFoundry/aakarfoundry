import './App.css'
import Dashboard from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Process from './Pages/Process';
import Approval from './Pages/Approval';
import ChangePassword from './Pages/ChangePassword';
import Summary from './Pages/Summary';
import UserApproval from './Pages/UserApproval';
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/details/:id" element={<Process />} />
          <Route path='/details' element={<Process />} />
          {/* <Route path="/customer" element={<CustomerName />} />
          <Route path="/rfq" element={<RfqAttributes />} />
          <Route path="/risk" element={<RiskAnalysis />} />
          <Route path="/design" element={<DesignFoundry />} />
          <Route path="/machine" element={<MachineQuality />} />
          <Route path="/prod" element={<NewProductDev />} /> */}
          <Route path="/approval" element={<Approval />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/user" element={<UserApproval />} />

          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
