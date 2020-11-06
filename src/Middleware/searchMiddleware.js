import {
  SEARCH_FUNCTION, setLoading, setDishes,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl } from '../utils/utils';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_FUNCTION: {
      const {
        token, userSearchInput,
      } = store.getState();
      store.dispatch(setLoading(true));
      Axios({
        method: 'post',
        url: `${baseUri + jsonUrl}search`,
        headers: { Authorization: `Bearer ${token}` },
        params: {
          search: userSearchInput,
          type: 'post',
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
        .finally(store.dispatch(setLoading(false)));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default searchMiddleware;
