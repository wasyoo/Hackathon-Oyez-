import gql from 'graphql-tag';

const DELETE_REPAS = gql`
  mutation deleteRepas($id: ID!) {
    deleteRepas(id: $id) {
      repas{
        name
      }
    }
  }
`;
export default DELETE_REPAS;