import { gql } from '@apollo/client';

export const QUERY_LISTINGS_BY_CATEGORY = gql`
query listingsByCategory($category: String!) {
  listingsByCategory(category: $category) {
    _id
    title
    owner
    address
    description
    images
    pricePerHour
    availability
    rating
    capacity
    rules
    amenities
    createdAt
    category {
      _id
      name
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    _id
    name
  }
}
`



export const GET_CHECKOUT = gql`
query checkout($listingId: ID!, $phQuantity: Int!) {
    checkout(listingId: $listingId, phQuantity: $phQuantity) {
      session
    }
  }`

  export const GET_LISTING = gql`
  query listing($listingId: ID!) {
    listing(listingId: $listingId) {
      _id
      title
      owner
      address
      description
      images
      pricePerHour
      availability
      rating
      capacity
      rules
      amenities
      createdAt
      category {
        _id
        name
      }
    }
  }
  `