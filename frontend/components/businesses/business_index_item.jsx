import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="business-outline">

            <div className="business-image">

                <Link to={`/business/${this.props.business.id}`}>
                  <img src={this.props.business.image_url} alt={this.props.business.name} />
                </Link>

            </div>
            <span className="businesscards">
              <ul>
                <li>
                  <strong>{this.props.business.name}</strong>
                </li>
                <li>
                  {this.props.business.phone}
                </li>
                <li>
                  {this.props.business.price}
                </li>
                <li>
                  {this.props.business.rating}
                </li>
              </ul>
            </span>
        </div>
    );
  }
}

export default BusinessIndexItem;