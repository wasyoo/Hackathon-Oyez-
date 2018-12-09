import { gql } from 'apollo-server';

const repas = gql`

type Repas{
  id: ID!
  name: String!
  qtt: Int!
  description: String!
  image: Image 
  price: Int!
}
input RepasInput{
  name: String!
  qtt: Int!
  description: String!
  image: String 
  price: Int!
}

type Image {
  src: String!
  alt: String
}
type RepasRegistered {
  repas: Repas!
}
`;
export default [repas];
