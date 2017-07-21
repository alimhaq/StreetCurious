import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Manifesto from './modal/manifesto_modal.jsx';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
// import AuthRoute from '../util/route_util.jsx'

const App = () => (
  <div>
    <Manifesto />
    <header>
      <Link to="/">
        <span>
          <p id="titlep1">street</p>
          <p id="titlep2" >curious</p>
        </span>
      </Link>
      <NavbarContainer />
    </header>
    <bodytext className="maintext">
      <Switch>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
      </Switch>
    </bodytext>
  </div>
);

export default App;

