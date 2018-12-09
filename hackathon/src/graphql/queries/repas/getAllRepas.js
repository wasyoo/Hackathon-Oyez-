//  getAllRepas: [Repas]
import gql from 'graphql-tag';

const GET_ALL_REPAS = gql`
  query  {
    listrepas {
      id
      name
      qtt
      description
    }
  }
`;
export default GET_ALL_REPAS;