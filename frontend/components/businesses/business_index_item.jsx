import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="business">
        <div className="business-outline">
          <div className="business-image">
            <Link to={`/businesss/${this.props.business.id}`}>
              <img src={this.props.business.image_url} alt={this.props.business.name} />
            </Link>
          </div>
          <div className="business-info">
            <div className="business-category">
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default BusinessIndexItem;