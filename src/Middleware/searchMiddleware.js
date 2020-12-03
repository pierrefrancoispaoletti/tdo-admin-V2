import {
  SEARCH_FUNCTION,
  setLoading,
  setDishes,
  setSearchResults,
  setCategory,
  setIfPostingIsSuccess,
  setIfPostingIsError,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, getToken, jsonUrl } from '../utils/utils';
import { researchMessage, errorMessages } from '../datas/messages';

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
          if (response.data.length > 0) {
            store.dispatch(setDishes(response.data));
            store.dispatch(setIfPostingIsSuccess(true, researchMessage[0].searchSuccess));
          }
          else {
            store.dispatch(setDishes([]));
            store.dispatch(setIfPostingIsError(true, researchMessage[0].searchError));
          }
          store.dispatch(setCategory(''));
          store.dispatch(setLoading(false));
        })
        .then(() => {
          store.dispatch(setSearchResults());
        })
        .catch(() => {
          store.dispatch(setIfPostingIsError(true, errorMessages[0].serverError));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default searchMiddleware;
