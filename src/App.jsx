import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./file/Home";
import LoginPage from "./file/LoginPage";
import SignupPage from "./file/SignupPage"; // <-- import signup page
import GetStarted from "./file/GetStarted";
import NavbarWithHover from "./file/NavbarWithHover";
import Appointment from "./Appointment";
import Learn from "./Learn";
import AboutUs from "./file/Aboutus";
import ContactUs from "./ContactUs";
import SeeAllDoctor from "./file/SeeAllDoctor";
import Allservice from "./file/Allservice";
import Medicalvideo from "./file/Medicalvideo";


function App() {
  return (
    
    
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/seealldoctor" element={<SeeAllDoctor />} />
         <Route path="/allservice" element={<Allservice />} />
         <Route path="/medicalvideo" element={<Medicalvideo />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
