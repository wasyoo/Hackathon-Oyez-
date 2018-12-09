import gql from 'graphql-tag';

const ADD_USER = gql`
  mutation createuser($input: UserInput) {
    createUser(input : $input) {
      user{
        username,
        email,
        company
      }
    }
  }
`;
export default ADD_USER;