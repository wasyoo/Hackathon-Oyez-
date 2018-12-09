import gql from 'graphql-tag';

const GET_ALL_USER = gql`
  query listuser {
    listuser {
      id
      username
      email
      company
    }
  }
`;
export default GET_ALL_USER;