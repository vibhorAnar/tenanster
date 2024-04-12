import {gql} from '@apollo/client';
import {UserFregment} from './fragment';

export const GQLLoginMutation = gql`
  ${UserFregment}
  mutation login($user: LoginUserInput!) {
    login(user: $user) {
      token
      user {
        ...UserFregment
      }
    }
  }
`;

export const GQLRegisterMutation = gql`
  ${UserFregment}
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      token
      user {
        ...UserFregment
      }
    }
  }
`;
