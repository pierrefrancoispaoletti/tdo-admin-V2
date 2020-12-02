import {
  SEARCH_FUNCTION,
  setLoading,
  setDishes,
  setSearchResults,
  setCategory,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, getToken, jsonUrl } from '../utils/utils';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_FUNCTION: {
      const token = getToken();
      const {
        userSearchInput,
      } = store.getState();
      store.dispatch(setLoading(true));
      Axios({
        method: 'get',
        // modifier le code ici avec le nouveau endpoint search/?s=chaine-a-a-chercher
        url: `${baseUri + jsonUrl}search/?s=${userSearchInput}`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          store.dispatch(setDishes(response.data || []));
          store.dispatch(setCategory(''));
          store.dispatch(setLoading(false));
        })
        .then(() => {
          store.dispatch(setSearchResults());
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default searchMiddleware;
