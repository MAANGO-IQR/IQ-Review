import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css'

render(
    <BrowserRouter>
    <AppContext.Provider value = {{userid:null, }}>  
        <App/>
    </AppContext.Provider>
    </BrowserRouter>, 
    document.getElementById('app')
)