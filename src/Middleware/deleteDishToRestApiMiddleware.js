import {
  DELETE_DISHE, userLogged, closeModal, loadDishes,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl, verifyToken } from '../utils/utils';

const addDishToRestApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_DISHE: {
      const {
        token, dishesCategory, disheId,
      } = store.getState();
      verifyToken(token)
        .then(
          Axios({
            method: 'delete',
            url: `${baseUri + jsonUrl + dishesCategory}/${disheId}`,
            headers: { Authorization: `Bearer ${token}` },
            params: {
              force: true,
            },
          })
            .then(() => {
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
      break;
    }
    default:
      next(action);
  }
};

export default addDishToRestApiMiddleware;
