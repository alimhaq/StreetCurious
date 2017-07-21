import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, currentUser}) => (
<Route path={path} render={(props) => (
  !(!!currentUser) ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  )
)}/>
);

const mapStateToProps = state => {
return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));