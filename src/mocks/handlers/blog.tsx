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
  const post = getSinglePost(req.params.id);
  post = getPosts();
  console.log('post from single post hendler', post);
  // console.log(post);
  return res(ctx.status(200), ctx.json(getPosts()));
});

const updatePostHandler = rest.patch(`${URL_PATH}:id`, (req, res, ctx) => {
  const newPost = req.body;
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
