{
  session: {
    currentUser: {
      id: 8,
      username: "dallashall"
    },
  },
  business: {
    id: 12,
    owner_id: 2,
    name: "Blue Hawaii Acai Cafe",
    address: "2 Embarcadero Ctr",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    hours: ["9 to 5"],
    rating: 94,
    favorite: true
  },
  reviews: [
    {
      business_id: 12,
      user: {
        username: "kelly123",
        id: 4
      },
      title: "An absolute delight",
      body: "There's no competition–Blue Hawaii takes the cake for having the best poke around.",
      rating: 98,
      date: "07/23/2017",
    },
    {
      business_id: 12,
      user: {
        username: "tychoprice",
        id: 7
      },
      title: "Expensive but pretty decent",
      body: "I guess like, it was alright, just don't have the money to have this for lunch every day.",
      rating: 88,
      date: "07/19/2017",
    }
  ],
}


Store all state within a single object to be contained within the REDUX store;
individual reducers for reviews, businesses, etc.
