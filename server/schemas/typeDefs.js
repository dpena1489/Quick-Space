const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    bookings: [Booking]
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Listing {
    _id: ID!
    title: String!
    owner: String!
    address: String!
    description: String
    images: [String]
    pricePerHour: Float!
    availability: Boolean!
    rating: Float
    capacity: Int
    rules: String
    amenities: [String]
    createdAt: String
    category: Category!
  }

  type Booking {
    _id: ID!
    listing: Listing!
    startTime: String!
    endTime: String!
    totalPrice: Float!
  }

  type Auth{
    token: ID,
    user: User
  }

  type Checkout{
    session: ID
  }

  type Query {
    user: User
    categories: [Category]
    category(_id: ID!): Category
    listings: [Listing]
    listing(listingId: ID!): Listing
    booking(_id: ID!): Booking
    listingsByCategory(category: String!): [Listing], 
    checkout(listingId: ID!, startTime: String!, endTime: String!): Checkout
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createBooking( listingId: ID!, startTime: String!, endTime: String!, totalPrice: Float!): User
  }
`;

module.exports = typeDefs;