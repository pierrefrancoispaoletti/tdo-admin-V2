import Axios from 'axios';

/** @TODO CHANGER L'URL AVANT MISE EN PROD */
export const baseUri = 'https://le-tdo.com/';
// export const baseUri = 'http://localhost/projet-tdo/';
export const jsonUrl = 'wp-json/wp/v2/';
export const jwtUrl = 'wp-json/jwt-auth/v1/';

/** @TODO Ameliorer le handling du token pour eviter de
 * retaper 500 fois son mot de passe par jours :-) */

export const verifyToken = (token) => {
  const verifyIfUserIsLoggedInPromise = new Promise((resolve, reject) => {
    if (token) {
      Axios({
        method: 'post',
        url: `${baseUri + jwtUrl}token/validate`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(resolve)
        .catch(reject);
    }
    else {
      reject();
    }
  });

  return verifyIfUserIsLoggedInPromise;
};

/**
 *
 * @param {string} input
 * @param {array} arrayOfObject
 */
export const convertCategoryNameToId = (input, arrayOfObject) => {
  let result;
  arrayOfObject.forEach((object) => {
    if (object.name === input) {
      result = object.id;
    }
  });
  return result;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');
