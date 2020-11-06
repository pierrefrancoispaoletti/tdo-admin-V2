import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import addDishToRestApiMiddleware from '../Middleware/addDishToRestApiMiddleware';
import postingErrorHandlerMiddleware from '../Middleware/postingErrorHandlerMiddleware';
import authMiddleware from '../Middleware/authMiddleware';
import loadDishesMiddleware from '../Middleware/loadDishesMiddleware';
import deleteDishToRestApiMiddleware from '../Middleware/deleteDishToRestApiMiddleware';
import editDishToRestApiMiddleware from '../Middleware/editDishToRestApiMiddleware';
// import searchMiddleware from '../Middleware/searchMiddleware';
import reducer from './reducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    postingErrorHandlerMiddleware,
    addDishToRestApiMiddleware,
    deleteDishToRestApiMiddleware,
    editDishToRestApiMiddleware,
    // searchMiddleware,
    loadDishesMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
