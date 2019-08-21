import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Logo from '../../assets/img/logo.png';

const NavBar = ({ user }) => {
  
  return (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand font-weight-bold mr-5" to="/">
          <img src={Logo} alt="Semicolon Logo" className="mr-3" style={{width: '33px', height: '33px'}}/>
          Semicolon
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            { user && <li className="nav-item">
              <Link className="nav-link" to="/users">Users<span className="sr-only">(current)</span></Link>
            </li>}
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings<span className="sr-only">(current)</span></Link>
            </li>
          </ul>            
         { user ? <SignedInLinks user={user} /> : <SignedOutLinks /> }
        </div>
      </div>
    </nav>
  )
}

export default NavBar;