import { RequestHandler, rest } from 'msw';
import { parse } from 'postcss';

import { getSingleUser, getUsers } from '../fixtures/login';

const URL_PATH = '/api/login/';
const getSingleUserHandler = rest.get(`${URL_PATH}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(getUsers()));
});

const loginHandlers = [getSingleUserHandler];

export { loginHandlers };
