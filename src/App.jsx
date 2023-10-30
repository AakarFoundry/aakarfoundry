import './App.css'
import NavBar from './Components/NavBar';
import Dashboard from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { Register } from './Pages/register';
import { CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Process from './Pages/Process';
import Approval from './Pages/Approval';
import ChangePassword from './Pages/ChangePassword';
import Summary from './Pages/Summary';
import { createContext, useState } from 'react';
// import Loader from './Components/Loader';
// export const LoadingContext = createContext();
function App() {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <>

      <Router>
        {window.location.pathname !== "/" && window.location.pathname !== "/register" ? <NavBar /> : <> </>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
