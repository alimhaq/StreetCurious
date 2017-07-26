import React from 'react';
import BusinessIndexItem from './business_index_item';
import { CSSTransitionGroup } from 'react-transition-group'

class BusinessIndex extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    this.props.getRestaurants();
  }

  render() {
    return (
      <section className="business-index">
        <div className="business-index-content">
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          <ul className="business">

              {this.props.restaurants.map(
                business => <BusinessIndexItem key={business.id} business={business} />
              )}

          </ul>
          </CSSTransitionGroup>
        </div>
      </section>
    );
  }
}

export default BusinessIndex;