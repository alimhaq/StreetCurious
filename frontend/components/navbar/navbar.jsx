import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container.jsx'

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      formType: ''
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // componentWillMount() {
  //   setTimeout(this.handleOpenModal, 2500);
  // }
  
  handleOpenModal (formType) {
    return (e) => {
      console.log("WHAAA");
      e.preventDefault();
      this.setState({ showModal: true,
      formType });
    }
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleLogout () {
    this.handleCloseModal();
    this.props.logout();
  }

  sessionLinks () {
    return (<nav className="login-signup">
      <span>
        <span className="signupbutton">
          <button onClick={this.handleOpenModal("signup")}>Sign Up</button>
        </span>
        <span className="loginbutton">
          <button onClick={this.handleOpenModal("login")}>Login</button>
          </span>
        <div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Session Form"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay : {
                position          : 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top               : 0,
                left              : 0,
                right             : 0,
                bottom            : 0,
                backgroundColor   : 'rgba(0, 0, 0, 0.25)'
              },
              content : {
                background                 : '#fff',
                overflow                   : 'auto',
                WebkitOverflowScrolling    : 'touch',
                padding                    : '50px',
                border                     : '0px solid #ccc',
                borderRadius               : '0px',
                width: "500px",
                height: "600px",
                top: 'none',
                bottom: 'none',
                left: 'none',
                right: 'none'
              }
            }}
          >
          <span>
          </span>
          <div className="loginSignupModal">
            <button onClick={this.handleCloseModal}>X</button>
            {this.state.formType === 'login' ? (<SessionFormContainer formType='login'
            openModal={this.handleOpenModal}/>) :
            (<SessionFormContainer formType='signup'
            openModal={this.handleOpenModal}/>)}
          </div>
          </ReactModal>
        </div>
      </span>
    </nav>)
  }

  personalNavbar (currentUser, logout) {
    return (
    <hgroup className="header-group">
      <p className="header-name">Hi, {currentUser.username}!</p>
      <button className="header-button" onClick={this.handleLogout}>Log Out</button>
    </hgroup>
  )}
  
  render () {
    const {currentUser, logout} = this.props;
    return (
      currentUser ? this.personalNavbar(currentUser, logout) : this.sessionLinks()
    );
  }
}

export default Navbar;