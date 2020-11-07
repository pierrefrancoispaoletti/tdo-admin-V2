import {
  SEARCH_FUNCTION, setLoading, setDishes, setSearchResults,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl } from '../utils/utils';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_FUNCTION: {
      const {
        token,
      } = store.getState();
      store.dispatch(setLoading(true));
      Axios({
        method: 'get',
        url: `${baseUri + jsonUrl}all-posts`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          store.dispatch(setDishes(response.data));
        })
        .then(() => {
          store.dispatch(setSearchResults());
          // store.dispatch(loadDishes());
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
