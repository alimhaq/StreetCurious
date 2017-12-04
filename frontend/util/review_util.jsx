export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews`,
    data: { businessId }
  })
);

export const createReview = (businessId, review) => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: { review, businessId }
  })
);

// export const fetchUserReviews = (userId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}/reviews`
//   })
// );

export const destroyReview = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/reviews/${id}`
    })
  );
};