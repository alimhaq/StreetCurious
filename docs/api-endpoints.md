# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Businesses

- `GET /api/businesses`
- `GET /api/businesses/:id`
- `GET /api/businesses/featured/:id`

### Reviews

- `GET /api/businesses/:business_id/reviews`
- `POST /api/businesses/:business_id/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/users/:user_id/reviews`

### Favorites

- `GET /api/users/:user_id/favorites`