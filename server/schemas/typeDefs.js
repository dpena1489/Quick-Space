const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    bookings: [Booking]
  }

  type Category {
    id: ID!
    name: String!
  }

  type Listing {
    id: ID!
    title: String!
    owner: String!
    address: String!
    description: String
    image: String
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
    id: ID!
    listing: Listing!
    startTime: String!
    endTime: String!
    totalPrice: Float!
  }

  type Auth{
    token: ID,
    user: User
  }

  type Query {
    user: User
    categories: [Category]
    category(id: ID!): Category
    listings: [Listing]
    listing(id: ID!): Listing
    booking(id: ID!): Booking
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createBooking( listingId: ID!, startTime: String!, endTime: String!, totalPrice: Float!): User
  }
`;

module.exports = typeDefs;