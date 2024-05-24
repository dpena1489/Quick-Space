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