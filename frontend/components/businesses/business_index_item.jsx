import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.business = this.props.business;
  }

  render() {
    return (
      <li className="business">
        <div className="business-outline">
          <div className="business-image">
            <Link to={`/businesss/${this.business.id}`}>
              <img src={this.business.image_url} alt={this.business.name} />
            </Link>
          </div>
          <div className="business-info">
            <div className="business-category">
              <Link to={`/categories/${this.business.category_id}`}>
                {this.business.category_name}
              </Link>
            </div>
            <p className="business-title-description">
              <Link to={`/businesss/${this.business.id}`}>
                {this.business.title}:
              </Link>
              &nbsp;
              {this.business.description}
            </p>
            <div className="creator-info">
              <img src={this.business.creator_image_url} alt={this.business.creator_name} />
              &nbsp;&nbsp;
              <span className="by">by</span>&nbsp;<p>{this.business.creator_name}</p>
            </div>
            <div className="progress-line">
              {this.renderProgressLine()}
            </div>
            <div className="business-funding-stats">
              <div className="pledged-stat">
                <span>${this.numberWithCommas(this.business.total_pledge_amount)}</span>&nbsp;
                <p>pledged</p>
              </div>
              <div className="funded-stat">
                <span>{this.percent}%</span>&nbsp;
                <p>funded</p>
              </div>
              <div className="days-left">
                <span>{this.renderDateRemaining(this.business.end_date)}</span>
                &nbsp;
                <p>days to go</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default BusinessIndexItem;