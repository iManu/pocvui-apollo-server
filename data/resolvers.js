import { find, filter, map } from 'lodash';
import rp from 'request-promise';
// import { pubsub } from './subscriptions';

const dataJson = require('./data');
const links = dataJson.data.links;
const pages = dataJson.data.pages;
const menus = dataJson.data.menus;
const config = dataJson.data.config;

const fakeURL = 'http://jsonplaceholder.typicode.com/users';

const rpOptions = {
    uri: 'http://jsonplaceholder.typicode.com/users',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
};

function fetchResponse() {
  return rp(rpOptions).then((res) => {
    const data = res;
    return map(data, (item) => {
      return {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        website: item.website,
      };
    });
  }).catch(function (err) {
      console.log('errrrr', err);
      return [{
        error: err,
      }];
  });
}


const resolveFunctions = {
  Query: {
    links() {
      return links;
    },
    menus() {
      return menus;
    },
    page(_, { route }) {
      return find(pages, { route: route });
    },
    async users() {
      return fetchResponse();
    },
  },
  Mutation: {
    changeMenu(_, { menuId }) {
      const menu = find(config, { menu: menuId });
      if (!menu) {
        throw new Error(`Couldn't find config with menu id ${menu}`);
      }
      pubsub.publish('menuChanged', menu);
      return menu;
    },
  },
  Subscription: {
    menuChanged(menuId) {
      return menuId;
    },
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
