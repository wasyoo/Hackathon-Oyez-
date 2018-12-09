import { ApolloServer } from 'apollo-server';
import dbConnect from './db/connect';
import User from './db/models/user';
import Repas from './db/models/repas';
import Order from './db/models/order';
import Comment from './db/models/comment';
import schema from './graphql/schema';

dbConnect()
  .then(() => {
    const server = new ApolloServer({
      schema,
      context: () => ({
        models: {
          User,
          Repas,
          Order,
          Comment,
        },
      }),
    });
    server.listen().then(({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`🚀  Server ready at ${url}`);
    });
  });
