const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    messages: [Message]!
  }

  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String

  }



  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    messages(username: String): [Message]
    message(messageId: ID!): Message
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addmessage(messageText: String!): Message
    removemessage(messageId: ID!): Message
  }
`;

module.exports = typeDefs;
