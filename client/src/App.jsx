
import './App.css'
import { CustomerName } from './Pages/customerName'
import Dashboard from './Pages/dashBoard';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { RfqAttributes } from './Pages/RfqAttributes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element = {<Register/>}/>
        <Route path ="/customer" element={<CustomerName />} />
        <Route path = "/rfq" element = { <RfqAttributes /> } />
        <Route path = "/dash" element = { <Dashboard /> } />

      </Routes>
    </Router>
    </>
  )
}

export default App
