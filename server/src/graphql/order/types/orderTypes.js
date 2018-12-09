import { gql } from 'apollo-server';

const order = gql`

type Order{
  id: ID!
  iduser: String!
  idrepas: String!
  quantite: String!
  total: String 
}
input OrderInput{
  iduser: String!
  idrepas: String!
  quantite: String!
  total: String
}
type OrderRegistered {
  order: Order!
}
`;
export default [order];
