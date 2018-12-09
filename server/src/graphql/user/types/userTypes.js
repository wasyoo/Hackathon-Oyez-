import { gql } from 'apollo-server';

const user = gql`

input UserInput {
    username: String!
    email: String!
    password: String!
    company: String
}

type User {
    id: ID!
    username: String
    email: String
    password: String
    company: String
}

input LoginInput {
    email: String!
    password: String!
}

type UserLogged {
    user: User!
}
`;
export default [user];