import { gql } from 'apollo-server';

export const Query = gql`
  listorder: [Order]
  order(id:ID!): Order
`;
export const Resolvers = {
  listorder: (_, $, { models }) => models.Order.find(),
  order: (_, { id }, { models }) => models.Order.findById({ _id: id }),
};
