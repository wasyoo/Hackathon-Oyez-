import { gql } from 'apollo-server';

export const commentMutations = gql`
createComment(input: CommentInput): CommentRegistered
updateComment(id: ID!,input: CommentInput): CommentRegistered
deleteComment(id: ID!): CommentRegistered
`;
export const Resolvers = {
  createComment: async (_, { input }, { models }) => {
    const comment = new models.Comment({ ...input });
    await comment.save();
    return {
      comment,
    };
  },
  updateComment: async (_, { input, id }, { models }) => {
    const comment = await models.Comment.findById({ _id: id });
    comment.message = input.message;
    await comment.save();
    return {
      comment,
    };
  },
  deleteComment: async (_, { id }, { models }) => {
    const comment = await models.Comment.deleteOne({ _id: id });

    return { comment };
  },
};
