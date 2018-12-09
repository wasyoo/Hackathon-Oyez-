import { gql } from 'apollo-server';

export const repasMutations = gql`
createRepas(input: RepasInput): RepasRegistered
updateRepas(id: ID!,input: RepasInput): RepasRegistered
deleteRepas(id: ID!): RepasRegistered
`;
export const Resolvers = {
  createRepas: async (_, { input }, { models }) => {
    const repas = new models.Repas({ ...input });
    await repas.save();
    return {
      repas,
    };
  },
  updateRepas: async (_, { input, id }, { models }) => {
    const repas = await models.Repas.findById({ _id: id });
    repas.name = input.name;
    repas.qtt = input.qtt;
    repas.description = input.description;
    repas.price = input.price;
    repas.image = input.image;
    await repas.save();
    return {
      repas,
    };
  },
  deleteRepas: async (_, { id }, { models }) => {
    const repas = await models.Repas.deleteOne({ _id: id });

    return { repas };
  },
};
