import blogHandlers from './blog';
import appHandlers from './app';

const handlers = [...blogHandlers, ...appHandlers];

export default handlers;
