import {
  DELETE_DISHE, userLogged, closeModal, loadDishes, setIfPostingIsSuccess, setIfPostingIsError,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl, verifyToken } from '../utils/utils';
import { errorMessages, successMessages } from '../datas/messages';

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
              store.dispatch(setIfPostingIsSuccess(true, successMessages[0].deleteSuccess));
            })
            .catch(() => {
              store.dispatch(setIfPostingIsError(true, errorMessages[0].deletingError));
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
