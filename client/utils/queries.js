import {gql} from '@apollo/client'

export const GET_CHECKOUT = gql`
query checkout($listingId: ID!, $phQuantity: Int!) {
    checkout(listingId: $listingId, phQuantity: $phQuantity) {
      session
    }
  }`