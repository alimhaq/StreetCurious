import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div className="business-outline">

            <div className="business-image">

                <Link to={`/business/${this.props.business.id}`}>
                  <img src={this.props.business.image_url} alt={this.props.business.name} />
                </Link>

            </div>
            <span className="businesscards">
              <ul>
                <div className="card-title">
                  <span>
                    <strong>{this.props.business.name}</strong>
                  </span>
                  <span className='rating'>
                    <h1 className="title"><span className="highlight" style={{background: "green"}}>{this.props.business.rating * 20}</span></h1>
                  </span>
                </div>
                <li>
                  {this.props.business.display_phone}
                </li>
                <li>
                  {this.props.business.price}
                </li>
              </ul>
            </span>
        </div>
      </li>
    );
  }
}

export default BusinessIndexItem;