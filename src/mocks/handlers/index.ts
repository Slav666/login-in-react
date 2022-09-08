import postHandlers from './blog';
import appHandlers from './app';

const handlers = [...postHandlers, ...appHandlers];

export default handlers;
