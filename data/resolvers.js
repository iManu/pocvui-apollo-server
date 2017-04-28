import { find, filter } from 'lodash';
// import { pubsub } from './subscriptions';

// const authors = [
//   { id: 1, firstName: 'Tom', lastName: 'Coleman' },
//   { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
// ];

// const links = [
//   { id: 1, title: 'Lien 1', href: '/' },
//   { id: 2, title: 'Lien 2', href: '/coucou' },
//   { id: 3, title: 'Lien 3', href: '/coucou' },
// ];

const dataJson = require('./data');
const links = dataJson.data.links;

const resolveFunctions = {
  Query: {
    links() {
      return links;
    },
    // author(_, { id }) {
    //   return find(authors, { id: id });
    // },
  },
  // Mutation: {
  //   upvotePost(_, { postId }) {
  //     const post = find(posts, { id: postId });
  //     if (!post) {
  //       throw new Error(`Couldn't find post with id ${postId}`);
  //     }
  //     post.votes += 1;
  //     pubsub.publish('postUpvoted', post);
  //     return post;
  //   },
  // },
  // Subscription: {
  //   postUpvoted(post) {
  //     return post;
  //   },
  // },
  // Author: {
  //   posts(author) {
  //     return filter(posts, { authorId: author.id });
  //   },
  // },
  // Post: {
  //   author(post) {
  //     return find(authors, { id: post.authorId });
  //   },
  // },
};

export default resolveFunctions;
