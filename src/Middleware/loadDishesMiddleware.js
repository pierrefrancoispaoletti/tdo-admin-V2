import {
  LOAD_DISHES,
  setDishes,
  userLogged,
  setLoading,
  setCategory,
} from 'src/actions/Tdo';
import Axios from 'axios';

import {
  baseUri, getToken, jsonUrl, verifyToken,
} from '../utils/utils';

const loadDishesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_DISHES: {
      const token = getToken();
      const { dishesCategory } = store.getState();
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
              store.dispatch(setLoading(false));
              store.dispatch(setCategory('All'));
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.warn(error);
            }),
        )
        .catch(() => store.dispatch(userLogged(false)));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default loadDishesMiddleware;
