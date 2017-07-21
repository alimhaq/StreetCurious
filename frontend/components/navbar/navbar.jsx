import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <span>
    <span className="loginbutton"><Link to="/login">Login</Link></span>
    <span className="signupbutton"><Link to="/signup">Sign Up</Link></span>
    </span>
  </nav>
);

const personalNavbar = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? personalNavbar(currentUser, logout) : sessionLinks()
);

export default Navbar;