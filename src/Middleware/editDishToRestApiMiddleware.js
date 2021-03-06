import {
  SET_DISHE_TO_PRIVATE_IN_REST_API,
  EDIT_DISHE_TO_REST_API,
  loadDishes,
  userLogged,
  closeModal,
  setIfPostingIsError,
  setIfPostingIsSuccess,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jsonUrl, verifyToken } from '../utils/utils';
import { errorMessages, successMessages } from '../datas/messages';

const editDishToRestApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_DISHE_TO_PRIVATE_IN_REST_API: {
      const {
        token, dishesCategory, disheId, disheStatus,
      } = store.getState();
      verifyToken(token)
        .then(
          Axios({
            method: 'post',
            url: `${baseUri + jsonUrl + dishesCategory}/${disheId}`,
            headers: { Authorization: `Bearer ${token}` },
            params: {
              status: disheStatus === 'private' ? 'publish' : 'private',
            },
          })
            .then(() => {
              store.dispatch(loadDishes());
            })
            .catch(() => {
              store.dispatch(setIfPostingIsError(true, errorMessages[0].editingError));
            }),
        )
        .catch(() => store.dispatch(userLogged()));
      next(action);
      break;
    }
    case EDIT_DISHE_TO_REST_API: {
      const {
        token,
        dishesCategory,
        disheId,
        dishesInfosToAdd,
      } = store.getState();
      verifyToken(token)
        .then(
          Axios({
            method: 'post',
            url: `${baseUri + jsonUrl + dishesCategory}/${disheId}`,
            headers: { Authorization: `Bearer ${token}` },
            params: dishesInfosToAdd,
          })
            .then(() => {
              store.dispatch(loadDishes());
              store.dispatch(closeModal());
              store.dispatch(setIfPostingIsSuccess(true, successMessages[0].editSuccess));
            })
            .catch(() => {
              store.dispatch(setIfPostingIsError(true, errorMessages[0].editingError));
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

export default editDishToRestApiMiddleware;
