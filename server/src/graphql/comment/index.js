import * as queries from './queries/commentQueries';
import * as mutations from './mutations/commentMutations';
import comment from './types/commentTypes';

export const { Query } = queries;
export const Type = comment;
export const Mutation = mutations.commentMutations;
export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
