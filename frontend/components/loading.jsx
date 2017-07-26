import React from 'react';

class Loading extends React.Component {
  render() {
    return(
      <div className="sampleContainer">
        <div className="loader">
          <span className="dot dot_1"></span>
          <span className="dot dot_2"></span>
          <span className="dot dot_3"></span>
          <span className="dot dot_4"></span>
        </div>
      </div>
    );
  }
}

export default Loading;