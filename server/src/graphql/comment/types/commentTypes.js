import { gql } from 'apollo-server';

const comment = gql`

type Comment{
  id: ID!
  userid: String!
  repas_id: Int!
  message: String!
}
input CommentInput{
  userid: String!
  repas_id: Int!
  message: String!
}
type CommentRegistered {
  comment: Comment!
}
`;
export default [comment];
