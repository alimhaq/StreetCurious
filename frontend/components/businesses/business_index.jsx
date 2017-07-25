import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    this.props.getRestaurants();
  }

  render() {
    return (
      <section className="business-index">
        <div className="business-index-content">
          <ul className="business">
            {this.props.restaurants.map(
              business => <BusinessIndexItem key={business.id} business={business} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default BusinessIndex;