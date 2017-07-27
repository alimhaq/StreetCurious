export const fetchRestaurants = (searchTerms) => {
  const term = searchTerms.term ? `term=${searchTerms.term}` : '';
  const radius = searchTerms.radius ? `radius=${searchTerms.radius}` : '';
  const location = searchTerms.location ? `location=${searchTerms.location}` : '';
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants?${term}${radius}${location}`
  })
};

export const fetchRestaurant = (restaurantID) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantID}`
  })
)