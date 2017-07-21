import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class SessionModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // componentWillMount() {
  //   setTimeout(this.handleOpenModal, 2500);
  // }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Session Form"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
           style={{
            overlay : {
              position          : 'fixed',
              top               : 0,
              left              : 0,
              right             : 0,
              bottom            : 0,
              backgroundColor   : 'rgba(0, 0, 0, 0.25)'
            },
            content : {
              position                   : 'absolute', 
              top                        : '100',
              left                       : '400',
              right                      : '400',
              bottom                     : '100',
              background                 : '#fff',
              overflow                   : 'auto',
              WebkitOverflowScrolling    : 'touch',
              padding                    : '50px',
              border                     : '0px solid #ccc',
              borderRadius               : '0px'
            }
          }}
        >
        <span>
        </span>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default SessionModal;