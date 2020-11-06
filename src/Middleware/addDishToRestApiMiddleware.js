import {
  POST_DISHE_TO_REST_API, userLogged, closeModal, loadDishes,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl, verifyToken } from '../utils/utils';

const addDishToRestApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_DISHE_TO_REST_API: {
      const {
        token, dishesInfosToAdd, dishesCategory, postError,
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
              .then((response) => {
                console.log(response.data);
                store.dispatch(closeModal());
                store.dispatch(loadDishes());
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.warn(error);
              }),
          )
          .catch(() => store.dispatch(userLogged()));
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
