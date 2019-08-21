import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const SignedInLinks = ({ user }) =>  {
    return (
      <ul className="navbar-nav" style={{fontSize: '1.2em', fontWeight: '550'}}>
        <li className="nav-item">
          <NavLink className="nav-link " to="/">one</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/">two</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/">three</NavLink>
        </li>
        <li className="nav-item mr-5">
          <NavLink className="nav-link" to="/">four</NavLink>
        </li>

        <li className="nav-item dropdown mr-5">
          <span className="nav-link dropdown-toggle clickable" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user-alt mr-2"></i>{user.username}</span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink to="/profile" className="dropdown-item"><i className="far fa-user text-muted mr-2"></i>Profile</NavLink>
            <NavLink to="/setting" className="dropdown-item"><i className="fas fa-cog text-muted mr-2"></i>Settings</NavLink>
            <div className="dropdown-divider"></div>
            <Link to="/logout" className="dropdown-item"><i className="fas fa-sign-out-alt text-muted  mr-2"></i>Logout</Link>
          </div>
        </li>
      </ul>
    );
}
 
export default SignedInLinks;