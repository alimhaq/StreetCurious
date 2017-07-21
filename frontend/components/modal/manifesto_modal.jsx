import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class Manifesto extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    setTimeout(this.handleOpenModal, 2500);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <ReactModal className="animated slideInUp"
           isOpen={this.state.showModal}
           contentLabel="Manifesto"
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
        <span className="manifestomodal">
          <ul>
          Hi! Thanks for visiting streetcurious! :) You might be wondering what makes us different...Talk About:
            <li>
              ethical reviews: sc will never take money to alter or remove reviews (unless in circumstances where malicious intent/spam is found)
            </li>
            <li>
              rotten tomatoes style: reviews are counted as either positive or negative and compiled to a score out of 100; a low negative review doesn’t hurt as much!
            </li>
            <li>
              rating algorithm: recent reviews are weighted more, allows for businesses to make comebacks and have to keep up quality
            </li>
            <li>
              streetpocket: front end widget that keeps track of up to 4 restaurants/businesses to be compared
            </li>
            <li>
              OBVIOUSLY CLEAN THIS UP SUBSTANTIALLY...
            </li>
          </ul>
        </span>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default Manifesto;