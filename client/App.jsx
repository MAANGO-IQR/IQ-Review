import React from 'react';
import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LoginPage />} /> 
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    );
}
export default App;