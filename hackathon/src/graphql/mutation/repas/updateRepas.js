import gql from 'graphql-tag';

const UPDATE_REPAS = gql`
  mutation updateRepas($id: ID!, $input: RepasInput) {
    updateRepas(id: $id, input : $input) {
      repas{
        name,
        qtt,
        description,
        price,
        image
      }
    }
  }
`;
export default UPDATE_REPAS;
