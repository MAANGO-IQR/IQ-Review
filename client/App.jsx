import React from 'react';
import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
//import LandingContainer from './pages/home';
import Navbar from './components/login/nav';
import AboutUs from './pages/aboutUs';
import HomePage from './pages/homePage';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    
      <Route path="/homepage" element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      {/* <Route path="/submitnew" element={<homePage />} /> */}
      <Route path="/" element={<HomePage />} />
   
    </Routes>
    </>
    );
}
export default App;