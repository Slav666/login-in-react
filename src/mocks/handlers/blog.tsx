import { rest } from 'msw';

import {
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  addPost,
} from '../fixtures/blog';

const URL_PATH = '/api/posts/';

const getPostsHandler = rest.get(URL_PATH, (req, res, ctx) => {
  const posts = getPosts();
  return res(ctx.status(200), ctx.json(posts));
});

const addPostHandler = rest.post(URL_PATH, (req, res, ctx) => {
  const newPost = addPost(req.body);
  console.log('new post', req.body);
  console.log('add post handler', req.body);
  // addPost(newPost);
  console.log('new post created', newPost);
  const posts = getPosts();
  return res(ctx.status(200), ctx.json(posts));
});
const getSinglePostsHandler = rest.get(`${URL_PATH}:id`, (req, res, ctx) => {
  const post = +req.params.id;
  // console.log('req.params.', req.body);
  // const singlePost =
  // post = getPosts();
  // console.log('post from single post hendler', post);
  // console.log(post);
  console.log('post id from handler', +req.params.id);
  return res(ctx.status(200), ctx.json(getSinglePost(post)));
});

// const updatePostHandler = rest.patch(`${URL_PATH}:id`, (req, res, ctx) => {
//   const result = updatePost(+req.params.id, req.body.userId);
//   return result
//     ? res(ctx.status(200), ctx.json(getPosts()))
//     : res(ctx.status(400), ctx.json({ error: 'bad request' }));
// });

const updatePostHandler = rest.patch(`${URL_PATH}:id`, (req, res, ctx) => {
  console.log('REQUEST BODY: ', req.body);
  const newPost = req.body;
  console.log('user id update handler', req.body.userId);
  console.log('post id update handler', req.params.id);
  updatePost(newPost);
  return res(ctx.status(200), ctx.json(getPosts()));
});

const deleteTaskHandler = rest.delete(`${URL_PATH}:id`, (req, res, ctx) => {
  console.log('user id', req.body.userId);
  console.log('blog id', req.params.id);
  const result = deletePost(+req.params.id, req.body.userId);
  return result
    ? res(ctx.status(200), ctx.json(getPosts()))
    : res(ctx.status(400), ctx.json({ error: 'bad request' }));
});

const handlers = [
  getPostsHandler,
  getSinglePostsHandler,
  updatePostHandler,
  deleteTaskHandler,
  addPostHandler,
];

export default handlers;
