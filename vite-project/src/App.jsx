
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Component/Navbar.jsx"
import Footer from "./Component/Footer.jsx"
import DataScience from "./Component/DataScience.jsx"
import PythonCourse from "./Component/PythonCourse.jsx"
import FullStackCourse from "./Component/FullStackCourse.jsx"
import PaymentSection from "./Component/PaymentSection.jsx"
import LoginSection from "./Component/LoginSection.jsx"
import Home from "./pages/Home.jsx"
import './App.css'
import data from "./data/data.json"
import SignIn from "./Component/SignIn.jsx"




function App() {
  return (
  <>
   <Router>
    <Navbar />
    <div>
    <Routes  className="scrollable-content"   >
    <Route path="/" element={<Home/>}/>
    <Route path="/DataScience" element={<DataScience  Data={data.aboutPython}/>} />
    <Route path="/PythonCourse" element={<PythonCourse Data={data.aboutPython}   />} />
    <Route path="/FullStackCourse" element={<FullStackCourse Data={data.aboutPython} />} />
    <Route path="/PaymentSection" element={<PaymentSection Data={data.aboutPython} />} />
    <Route path="/LoginSection" element={<LoginSection />} />
    <Route path="/SignIn"  element={<SignIn/>} />
    </Routes>
    </div>
    <Footer />
  </Router>

  </>
  )
}

export default App
