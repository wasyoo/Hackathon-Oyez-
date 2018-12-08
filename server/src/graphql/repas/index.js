import * as queries from './queries/repasQueries';
import * as mutations from './mutations/repasMutations';
import repas from './types/repasTypes';

export const { Query } = queries;
export const Type = repas;
export const Mutation = mutations.repasMutations;
export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
