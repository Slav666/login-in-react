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
  const newPost = req.body;
  addPost(newPost);
  return res(ctx.status(200), ctx.json(getPosts()));
});

const getSinglePostsHandler = rest.get(`${URL_PATH}:id`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(getSinglePost(+req.params.id)));
});

const updatePostHandler = rest.patch(`${URL_PATH}:id`, (req, res, ctx) => {
  const newPost = req.body;
  updatePost(newPost);
  return res(ctx.status(200), ctx.json(getPosts()));
});

const deleteTaskHandler = rest.delete(`${URL_PATH}:id`, (req, res, ctx) => {
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
