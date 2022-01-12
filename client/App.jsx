import React from 'react';
import { Routes, Route } from 'react-router';
import CreateQuestionPage from './pages/CreateQuestionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
      <Routes>
        {/* <Route path='/aboutus' element={<AboutUs />} /> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/iq' element={<CreateQuestionPage />} />
        {/* <Route path='/' element={<HomePage />} />  */}
      </Routes>
    );
}
export default App;