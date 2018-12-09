import gql from 'graphql-tag';

const ADD_REPAS = gql`
  mutation createrepas($input: RepasInput) {
    createRepas(input : $input) {
      user{
        name,
        qtt,
        description,
        image,
        price
      }
    }
  }
`;
export default ADD_REPAS;