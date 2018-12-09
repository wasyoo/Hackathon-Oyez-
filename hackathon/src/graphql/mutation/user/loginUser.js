import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation login($input: LoginInput) {
    login(input : $input) {
      user{
        email,
        password
      }
    }
  }
`;
export default LOGIN_USER;
