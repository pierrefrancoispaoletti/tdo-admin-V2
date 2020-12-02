import {
  POST_DISHE_TO_REST_API, userLogged, closeModal, loadDishes, setIfPostingIsError,
  setIfPostingIsSuccess,
} from 'src/actions/Tdo';
import Axios from 'axios';

import {
  baseUri, getToken, jsonUrl, verifyToken,
} from '../utils/utils';
import { errorMessages, successMessages } from '../datas/messages';

const addDishToRestApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_DISHE_TO_REST_API: {
      const token = getToken();
      const {
        dishesInfosToAdd, dishesCategory, postError,
      } = store.getState();
      if (postError === false) {
        verifyToken(token)
          .then(
            Axios({
              method: 'post',
              url: baseUri + jsonUrl + dishesCategory,
              headers: { Authorization: `Bearer ${token}` },
              params: dishesInfosToAdd,
            })
              .then(() => {
                store.dispatch(closeModal());
                store.dispatch(loadDishes());
              })
              .then(() => {
                store.dispatch(setIfPostingIsSuccess(true, successMessages[0].postSuccess));
              })
              .catch(() => {
                store.dispatch(setIfPostingIsError(true, errorMessages[0].postingError));
              }),
          )
          .catch(() => store.dispatch(userLogged(false)));
        next(action);
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default addDishToRestApiMiddleware;
