import {
  LOGGING_ATTEMPT,
  userLogged,
  LogginFormErrorHandler,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jwtUrl, setToken } from '../utils/utils';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGGING_ATTEMPT: {
      const { userInputLogin, userInputPassword } = store.getState();
      Axios({
        method: 'post',
        url: `${baseUri + jwtUrl}token`,
        params: {
          username: userInputLogin,
          password: userInputPassword,
        },
      })
        .then((response) => {
          store.dispatch(LogginFormErrorHandler(false));
          setToken(response.data.token);
        })
        .then(store.dispatch(userLogged(true)))
        .catch(() => {
          store.dispatch(userLogged(false));
          store.dispatch(LogginFormErrorHandler(true));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
