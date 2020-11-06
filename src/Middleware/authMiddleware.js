import {
  LOGGING_ATTEMPT,
  userLogged,
  registerToken,
  LogginFormErrorHandler,
} from 'src/actions/Tdo';
import Axios from 'axios';

import { baseUri, jwtUrl } from '../utils/utils';

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
          store.dispatch(registerToken(response.data.token));
          store.dispatch(LogginFormErrorHandler(false));
        })
        .then(store.dispatch(userLogged()))
        .catch(() => {
          store.dispatch(userLogged());
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
