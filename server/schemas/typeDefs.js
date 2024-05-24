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