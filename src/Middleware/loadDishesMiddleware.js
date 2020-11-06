import {
  LOAD_DISHES, setDishes, userLogged, setLoading,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl, verifyToken } from '../utils/utils';

const loadDishesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_DISHES: {
      const { token, dishesCategory } = store.getState();
      store.dispatch(setLoading(true));
      verifyToken(token)
        .then(
          Axios({
            method: 'get',
            url: baseUri + jsonUrl + dishesCategory,
            headers: { Authorization: `Bearer ${token}` },
            params: {
              status: ['publish', 'private'],
              per_page: '50',
              order: 'asc',
            },
          })
            .then((response) => {
              store.dispatch(setDishes(response.data));
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.warn(error);
            })
            .finally(store.dispatch(setLoading(false))),
        )
        .catch(() => store.dispatch(userLogged()));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default loadDishesMiddleware;
