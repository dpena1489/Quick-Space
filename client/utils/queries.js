import { gql } from '@apollo/client';

export const QUERY_GROUPSPACE = gql`
  query listings {
    category[0]._id {
        _id
        imageSrc
        title
        price
        text
    }
  }
`;

export const QUERY_HOUSESPACE = gql`
  query getHouseListings {
    listings {
        _id
        imageSrc
        title
        price
        text
    }
  }
`;

export const QUERY_STUDIOSPACE = gql`
  query getStudioListings {
    listings {
        _id
        imageSrc
        title
        price
        text
    }
  }
`;

export const QUERY_STUDYSPACE = gql`
  query getStudyListings {
    listings {
        _id
        imageSrc
        title
        price
        text
    }
  }
`;