import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools';

import resolvers from './resolvers';

// const logger = { log: (e) => console.error(e.stack) };
// addErrorLoggingToSchema(mySchema, logger);

const schema = `

  type Link {
    id: Int!
    title: String
    href: String
    router: String
  }
  type Page {
    H1: String
    H2: String
  }
  type Menu {
    id: Int!
    color: String
  }
  type Config {
    menu: Int!
  }
  type User {
    id: Int!
    name: String
    username: String
    email: String
    website: String
  }
  
  # the schema allows the following query:
  type Query {
    menus: [Menu]
    links: [Link]
    users: [User]
    page(route: String!): Page
  }
  # this schema allows the following mutation:
  type Mutation {
    changeMenu (
      menu: Int!
    ): Config
  }

  type Subscription {
    menuChanged: Config
  }
`;


// const schema = `
// type Author {
//   id: Int! # the ! means that every author object _must_ have an id
//   firstName: String
//   lastName: String
//   posts: [Post] # the list of Posts by this author
// }

// type Post {
//   id: Int!
//   title: String
//   author: Author
//   votes: Int
// }

// # the schema allows the following query:
// type Query {
//   posts: [Post]
//   author(id: Int!): Author
// }

// # this schema allows the following mutation:
// type Mutation {
//   upvotePost (
//     postId: Int!
//   ): Post
// }

// type Subscription {
//   postUpvoted: Post
// }

// `;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
