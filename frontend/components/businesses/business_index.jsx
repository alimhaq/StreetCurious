import React from 'react';
import BusinessIndexItem from './business_index_item';
import { CSSTransitionGroup } from 'react-transition-group';
import Loading from '../loading';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return(
        <Loading />
      );
    }

    const restaurants = this.props.restaurants.map((business) => (
      <BusinessIndexItem key={business.id} business={business} />
    ));

    return (
      <section className="business-index">
        <div className="business-index-content">
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700} 
        transitionAppear={true} 
        transitionAppearTimeout={500}
        transitionLeave={true}>
          <ul className="business">

              {restaurants}

          </ul>
          </CSSTransitionGroup>
        </div>
      </section>
    );
  }
}

export default BusinessIndex;