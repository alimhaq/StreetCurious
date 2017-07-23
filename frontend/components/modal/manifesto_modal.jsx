import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class Manifesto extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    setTimeout(this.handleOpenModal, 2000);
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
        <ReactModal className="w3-modal-content w3-animate-bottom"
           isOpen={this.state.showModal}
           contentLabel="Manifesto"
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
              backgroundColor   : 'rgba(0, 0, 0, 0.4)'
            },
            content : {
              background                 : '#fff',
              overflow                   : 'auto',
              WebkitOverflowScrolling    : 'touch',
              border                     : '0px solid #ccc',
              borderRadius               : '0px',
              width: "650px",
              height: "700px",
              top: 'none',
              bottom: 'none',
              left: 'none',
              right: 'none'
            }
          }}
        >
        <span className="manifestomodal">
          <ul>
          <h1>Welcome to <strong>street</strong>curious! <i className="em em-wave"></i></h1>
          <p>Ratings pose an interesting problem. On one hand, they can serve as a useful gauge for consumers. Unfortunately, ratings are also prone to several issues both from the user and business side. What makes us so different?</p>
            <li>
              <strong>Laissez Faire Policy</strong><br></br>We will never take money to alter or remove reviews from business pages. All businesses on the website will be treated exactly the same. Only in clear instances of spam or fraud will reviews be removed.
            </li>
            <li>
              <strong>Binary Rating System</strong><br></br>Reviews are ultimately counted as either positive or negative and compiled to a score out of 100. This means that if just one grumpy customer has a bad experience, they won't have a significant impact on the overall score.
            </li>
            <li>
              <strong>Weighted for Recency</strong><br></br>Businesses are dynamic; sometimes it takes a while for a business to find its foothold, while othertimes they can slip. The most recent reviews are more relevant to the experience now.
            </li>
            <p>If you want to learn more about our mission, check out our <strong>manifesto</strong>.</p>
          </ul>
        </span>
          <center><button onClick={this.handleCloseModal}>Replace with Continue Button</button></center>
        </ReactModal>
      </div>
    );
  }
}

export default Manifesto;