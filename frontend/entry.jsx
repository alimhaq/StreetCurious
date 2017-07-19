import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util.js'

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>street curious</h1>, root);
});