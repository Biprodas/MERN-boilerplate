import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () =>  {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " to="/one">one</NavLink>
        </li>
        <li className="nav-item mr-5">
          <NavLink className="nav-link " to="/two">two</NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/login" className="nav-link"><i className="fas fa-sign-in-alt mr-1"></i>Log in</NavLink>
        </li>
        <li className="nav-item mr-5">
          <NavLink to="/register" className="nav-link"><i className="fas fa-user-plus mr-1"></i>Registration</NavLink>
        </li>
      </ul>
    );
}
 
export default SignedOutLinks;