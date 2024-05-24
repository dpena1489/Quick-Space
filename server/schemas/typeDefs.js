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
    user: User!
    listing: Listing!
    startTime: String!
    endTime: String!
    totalPrice: Float!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    categories: [Category]
    category(id: ID!): Category
    listings: [Listing]
    listing(id: ID!): Listing
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): User
    createCategory(name: String!): Category
    createListing(title: String!, owner: String!, address: String!, description: String, image: String, pricePerHour: Float!, availability: Boolean!, rating: Float, capacity: Int, rules: String, amenities: [String], categoryId: ID!): Listing
    createBooking(userId: ID!, listingId: ID!, startTime: String!, endTime: String!, totalPrice: Float!): Booking
  }
`;

module.exports = typeDefs;