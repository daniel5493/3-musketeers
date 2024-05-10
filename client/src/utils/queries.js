import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      transactions {
        _id
        amount
        createdAt
      }
    }
  }
`;

export const QUERY_TRANSACTIONS = gql`
query getTransactions {
  transactions {
    _id
    transactionText
    transactionAuthor
    createdAt
  }
}
`;

//export const QUERY_USER_TRANSACTIONS = gql`
//query getSingleThought($transactionId: ID!) {
//  transaction(transactionId: $transactionId) {
//    _id
//    createdAt
//    transactions {
//      _id
//      amount
//      createdAt
//    }
//  }
//}
// `;