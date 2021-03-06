import React from 'react';
import { Routes, Route } from 'react-router';
import CreateQuestionPage from './pages/CreateQuestionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Navbar from './components/login/NavBar';
import AppContext from './context';


import './styles/NavStyles.css'
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/aboutus' element={<AboutUs />} /> 
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/submitnew' element={<CreateQuestionPage />} />
        <Route path='/homepage' element={<HomePage />} />  
        <Route path='/' element={<HomePage />} />  
      </Routes>
      </>
    );
}
export default App;