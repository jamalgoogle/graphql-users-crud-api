const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUsers: [User!]!
    getUserByName(name: String!): User
    getUserById(id: ID!): User
  }

  type Mutation {
    addUser(name: String!): User!
    deleteUser(id: ID!): Boolean!
    updateUser(id: ID!, name: String!): User!
    deleteAllUsers: Boolean!
    addUsersBulk(names: [String!]!): [User!]!
  }
`;

module.exports = typeDefs;
