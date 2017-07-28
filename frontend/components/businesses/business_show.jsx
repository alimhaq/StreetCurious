import React from 'react';

const DAYS_OF_WEEK = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

function startToEndDate (start, end) {
  return `${militaryToRegularTime(start)} - ${militaryToRegularTime(end)}`;
}

function militaryToRegularTime (time) {
  if (parseInt(time) < 1200) {
    return `${time.slice(0,2)}:${time.slice(2,4)} am`;
  } else {
    if (parseInt(time) <= 2200) {
      let newTime = '0' + (parseInt(time) - 1200);
      return `${newTime.slice(0,2)}:${newTime.slice(2,4)} pm`;
    } else {
      return `${time.slice(0,2)}:${time.slice(2,4)} pm`;
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
    let { hours, name, image_url, display_phone, price } = this.props.restaurant;
    return (
      <div className='business-show-header'>
        <div className='business-divider'>
        <div className='business-show-image-frame'>
          <img className='business-show-image' src={image_url}/>
        </div>
        <div className='business-show-header-container'>
          <h1 className='business-show-name'>{name}</h1>
          <div className='business-show-card-container'>
            <div className='business-show-card'>
              {display_phone}
              {price}
              {hours[0].is_open_now ? 'open!' : 'closed :('}
              {/* insert address here  */}
            </div>
          </div>
        </div>
        <div className='business-content-container'>
          <ul>
              {hours[0].open.map((obj) => (   
              <li key = {obj.day}>
                <div>{DAYS_OF_WEEK[obj.day]}</div> 
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