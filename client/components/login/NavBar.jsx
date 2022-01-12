import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { logout } from '../../actions/session_actions';
import css from '../../styles/NavStyles.css';


function Navbar() {
    return (
      <nav className='Nav'>
        <Link to='/homepage' className='nav-el' style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to='/aboutus' className='nav-el' style={{ textDecoration: 'none' }}>
           About Us
        </Link>
        <Link to='/submitnew' className='nav-el' style={{ textDecoration: 'none' }}>
            Submit IQ
        </Link>
        <Link to='/login' className='nav-el' style={{ textDecoration: 'none' }}>
            Login
        </Link>
        <Link to='/signup' className='nav-el' style={{ textDecoration: 'none' }}>
            Signup
        </Link>
        
      </nav>
    );
  }
  
  export default Navbar;
  