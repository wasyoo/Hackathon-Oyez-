import { gql } from 'apollo-server';

export const Query = gql`
  listcomment: [Comment]
  comment(id:ID!): Comment
`;
export const Resolvers = {
  listcomment: (_, $, { models }) => models.Comment.find(),
  comment: (_, { id }, { models }) => models.Comment.findById({ _id: id }),
};
