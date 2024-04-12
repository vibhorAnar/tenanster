import {gql} from '@apollo/client';
import {Paginator, PropertyFregment, UserFregment} from './fragment';

export const GQLGetHomePageProperties = gql`
  ${PropertyFregment}
  ${Paginator}
  query HomePageProperties($lat: Float!, $lng: Float!) {
    nearByProperties(lat: $lat, lng: $lng) {
      paginator {
        ...Paginator
      }
      properties {
        ...PropertyFregment
      }
    }

    recentlyAddedProperties(lat: $lat, lng: $lng) {
      paginator {
        ...Paginator
      }
      properties {
        ...PropertyFregment
      }
    }

    myProperties {
      paginator {
        ...Paginator
      }
      properties {
        ...PropertyFregment
      }
    }
  }
`;

export const GQLGetMyProfile = gql`
  ${UserFregment}
  query myProfile {
    myProfile {
      ...UserFregment
    }
  }
`;
