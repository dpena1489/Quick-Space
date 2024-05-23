const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Listing {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Booking {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bookings: [Booking]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input BookingInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    listings(category: ID, name: String): [Listing]
    listing(_id: ID!): Listing
    user: User
    booking(_id: ID!): Booking
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBooking(listing: ID!): Booking
  }
`;

module.exports = typeDefs;
