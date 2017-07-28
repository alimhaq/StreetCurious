# streetcurious

[streetcurious live][streetcurious]

streetcurious is a modern business search engine that aims to have a more honest and forgiving review system that is more representative of what a business provides. It utilizes React.js along with Redux on the frontend, with Ruby on Rails and PostgreSQL on the backend. No external libraries were used in the styling of this application.

Please see the [docs][docs] folder for design documentation.

## Features & Implementation

### Searching Businesses with Tags

Businesses throughout San Francisco can be searched through streetcurious. The search bar pings the [Yelp Fusion API][yelp-fusion], which accesses its database of businesses through AJAX calls and returns the relevant businesses based on the tags inputted. Streetcurious can then parse through the businesses and present a list of the most relevant businesses to the user.

<p align="center">
  <img src="https://media.giphy.com/media/bHLGNqkEnfvzi/giphy.gif" alt="Search example">
</p>

A url query string is utilized to pass the parameters to Yelp, with built in ability to also process a location and radius from the location. These features will be implemented with a multi-input search bar on the homepage (CSS styling pending).

The Yelp Fusion API was accessed through a private API key, which was hidden by utilization of the Figaro Ruby gem.

### Utilizing the Google Maps JavaScript API

The [Google Maps API][google-maps] was able to be used to automatically plot the points on the map for each business that was returned from the Yelp API and shown on the index page. Businesses are clustered together through the location filter and by default the Google Map renders to a slightly zoomed out view of the first business returned.

```javascript
addBusiness(business) {
    const pos = new google.maps.LatLng(business.lat, business.long);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    this.addWindow(business, marker);
    marker.setAnimation(google.maps.Animation.DROP);

    marker.addListener('click', () => {
      this.props.router.push(`/businesses/${business.id}`);
    });

  }
```

Additional functionality is in place such that upon mouseover of a business, the respective marker on the map will light up corresponding to the business.

```javascript
const htmlElement = document.getElementById(business.name);
    if (htmlElement) {
      htmlElement.onmouseover = () => {
        window.open(this.map, marker);
      };

      htmlElement.onmouseout = () => {
        window.close(this.map, marker);
      };
    }
```

## Future Directions

### Additional Social Features
More backend features involving users will be added to increase the social features of the site. Profiles will be able to comment on comments, on profiles, make friends, and follow businesses.

### Cleaner CSS and UI
The amount of time devoted to CSS was surprisingly large; many of the nuances of design and CSS were not able to make it in the pre-production version of streetcurious. These will be added in due time.

[streetcurious]: http://www.streetcurious.com/
[docs]: ./docs
[yelp-fusion]: https://www.yelp.com/developers
[google-maps]: https://developers.google.com/maps/web/
