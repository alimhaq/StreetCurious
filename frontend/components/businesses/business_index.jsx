import React from 'react';
import BusinessIndexItem from './business_index_item';
import { CSSTransitionGroup } from 'react-transition-group';
import Loading from '../loading';
import Map from '../map';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    this.setState({ loading: false });
  }

  businessPositions() {
    let positions = [];
    this.props.restaurants.forEach(obj => {
      positions.push(
        {
          lat: obj.coordinates.latitude,
          long: obj.coordinates.longitude,
          name: obj.name,
          id: obj.id
          // address: this.props.businesses[id].street_address
        }
      );
    });
    return positions;
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
        <div>
          <Map
          zoom={13}
          center={{lat: this.props.restaurants[0].coordinates.latitude, lng: this.props.restaurants[0].coordinates.longitude}}
          businessPositions={this.businessPositions()} />
        </div>
      </section>
    );
  }
}

export default BusinessIndex;