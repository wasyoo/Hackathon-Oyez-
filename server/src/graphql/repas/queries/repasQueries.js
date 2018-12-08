import { gql } from 'apollo-server';

export const Query = gql`
  getAllRepas: [Repas]
  getRepasById(id:ID!):Repas
`