import { connect } from 'react-redux';

import { login, logout, signup, clearErrors } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType,
    loginUser: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);