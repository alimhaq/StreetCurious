import React from 'react';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRestaurant(this.props.match.params.businessID)
  }

  render() {
    console.log(this.props);
    return (
      <h1>{this.props.restaurant.name}</h1>
    )
  }
}

export default BusinessShow;