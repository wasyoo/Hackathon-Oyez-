import { gql } from 'apollo-server';

export const orderMutations = gql`
createOrder(input: OrderInput): OrderRegistered
updateOrder(id: ID!,input: OrderInput): OrderRegistered
deleteOrder(id: ID!): OrderRegistered
`;
export const Resolvers = {
  createOrder: async (_, { input }, { models }) => {
    const order = new models.Order({ ...input });
    await order.save();
    return {
      order,
    };
  },
  updateOrder: async (_, { input, id }, { models }) => {
    const order = await models.Order.findById({ _id: id });
    order.quantite = input.quantitee;
    order.total = input.total;
    order.idrepas = input.idrepas;
    await order.save();
    return {
      order,
    };
  },
  deleteOrder: async (_, { id }, { models }) => {
    const order = await models.Order.deleteOne({ _id: id });

    return { order };
  },
};
