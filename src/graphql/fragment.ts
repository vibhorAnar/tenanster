import {gql} from '@apollo/client';

export const Paginator = gql`
  fragment Paginator on PropertyPaginator {
    hasNextPage
    hasPreviousPage
    nextPage
    previousPage
    lastPage
    firstPage
    total
    totalPages
    currentPage
    limit
  }
`;

export const UserFregment = gql`
  fragment UserFregment on User {
    _id
    username
    email
    phone
    name
    photo
    dob
    role
    address
    state
    city
    zip
  }
`;

export const PropertyFregment = gql`
  ${UserFregment}
  fragment PropertyFregment on Property {
    _id
    name
    description
    address
    state
    city
    zipCode
    ownerId
    location {
      coordinates
    }
    rentAmount
    status
    owner {
      ...UserFregment
    }
    createdAt
    updatedAt
  }
`;
