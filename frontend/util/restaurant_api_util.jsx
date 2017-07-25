export const fetchRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants'
  })
);