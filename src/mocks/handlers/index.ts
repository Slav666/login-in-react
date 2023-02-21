// import blogHandlers from './blog';
import appHandlers from './app';
import { loginHandlers } from './login';

const handlers = [...appHandlers, ...loginHandlers];

export default handlers;
