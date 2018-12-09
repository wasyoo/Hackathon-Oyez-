import gql from 'graphql-tag';
//  getRepasById(id:ID!):Repas

const GET_REPAS_BY_ID = gql`
  query repas($id: ID!) {
    repas(id: $id) {
      id
      name
      qtt
      description
      image
      price
    }
  }
`;
export default GET_REPAS_BY_ID;