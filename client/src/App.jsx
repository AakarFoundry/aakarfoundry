import './App.css'
import NavBar from './Components/NavBar';
import { CustomerName } from './Pages/customerName'
import { Login } from './Pages/Login';
import { Register } from './Pages/register';
import { RfqAttributes } from './Pages/RfqAttributes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      </Routes>
    </Router>
    </>
  )
}

export default App
