import React from 'react';
import ReviewForm from '../reviews/review_form';
import Reviews from '../reviews/review';

const DAYS_OF_WEEK = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

function startToEndDate (start, end) {
  return `${militaryToRegularTime(start)} - ${militaryToRegularTime(end)}`;
}

function militaryToRegularTime (time) {
  if (parseInt(time) < 100) {
    let newTime = (parseInt(time) + 1200).toString();
    return `${newTime.slice(0,2)}:${newTime.slice(2,4)} am`;
  } else if (parseInt(time) < 1200) {
    return `${time.slice(0,2)}:${time.slice(2,4)} am`;
  } else {
    if (parseInt(time) <= 2200) {
      let newTime = '0' + (parseInt(time) - 1200);
      return `${newTime.slice(0,2)}:${newTime.slice(2,4)} pm`;
    } else {
      let newTime = (parseInt(time) - 1200).toString();
      return `${newTime.slice(0,2)}:${newTime.slice(2,4)} pm`;
    }
  };
}

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRestaurant(this.props.match.params.businessID)
  }

  render() {
    let { hours, name, image_url, display_phone, price, location } = this.props.restaurant;
    return (
      <div className='business-show-header'>
        <div className='business-divider'>
        <div className='business-show-image-frame'>
          <img className='business-show-image' src={image_url}/>
        </div>
        <div className='business-show-header-container'>
          <h1 className="business-show-title"><span className="business-show-highlight" style={{background: "black"}}>{name}</span></h1>
          {/* <h1 className='business-show-name'>{name}</h1> */}
          <div className='business-show-card-container'>
            <div className='business-show-card'>
              <ul>
                <li>{display_phone} | {price} | {hours[0].is_open_now ? 'open' : 'closed'}</li>
                  <li>
                  <p>{location.display_address[0]}</p>
                  <p>{location.display_address[1]}</p>
                  </li>  
                {/* <li>{hours[0].is_open_now ? 'open!' : 'closed :('}</li> */}
                {/* insert address here  */}
              </ul>
            </div>
          </div>
        </div>
        <div className='business-content-container'>
          <div>
            <ReviewForm currentUser={this.props.user} businessid={this.props.match.params.businessID} 
            createReview={this.props.createReview}
            />
            <Reviews requestReviews={this.props.requestReviews} 
            businessid={this.props.match.params.businessID} 
            reviews={this.props.reviews} />
          </div>
          <ul>
              {hours[0].open.map((obj) => (   
              <li key = {obj.day}>
                <div className='days'><strong>{DAYS_OF_WEEK[obj.day]}</strong></div> 
                <div>{startToEndDate(obj.start, obj.end)}</div> 
              </li>
              ))}  
          </ul>
        </div>
        </div>
      </div>
    )
  }
}

export default BusinessShow;