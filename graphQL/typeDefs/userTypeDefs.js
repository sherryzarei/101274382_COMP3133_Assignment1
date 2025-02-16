// userTypeDefs.js - GraphQL schema for User
const { gql } = require("apollo-server-express");

const userTypeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
}

input UserInput {
    username: String!
    email: String!
    password: String!
}

type LoginResponse {
    user: User
    token: String
}

type Query {
    login(username: String!, password: String!): LoginResponse
}

type Mutation {
  register(user: UserInput!): User!
}

`;

module.exports = userTypeDefs;
