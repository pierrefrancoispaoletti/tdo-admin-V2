/**     **\
 * LOGIN  *
 */
export const GET_USER_LOGIN = 'GET_USER_LOGIN';
export const LOGGING_ATTEMPT = 'LOGGING_ATTEMPT';
export const USER_LOGGED = 'USER_LOGGED';

export const changeLoginValue = (identifier, userInput) => ({
  type: GET_USER_LOGIN,
  identifier,
  userInput,
});

export const loggingAttempt = () => ({
  type: LOGGING_ATTEMPT,
});

export const userLogged = () => ({
  type: USER_LOGGED,
});

/** -------------------------------------------------------- */

/**     **\
 * TOKEN  *
 */
export const REGISTER_TOKEN = 'REGISTER_TOKEN';

export const registerToken = (token) => ({
  type: REGISTER_TOKEN,
  token,
});

/** -------------------------------------------------------- */

/**      **\
 * ERROR  *
 */
export const LOGIN_FORM_ERROR = 'LOGIN_FORM_ERROR';
export const POSTIN_FORM_ERROR = 'POSTIN_FORM_ERROR';
export const SET_POST_ERROR = 'SET_POST_ERROR';

export const LogginFormErrorHandler = (logError) => ({
  type: LOGIN_FORM_ERROR,
  logError,
});

export const postinFormErrorHandler = () => ({
  type: POSTIN_FORM_ERROR,
});

export const setPostError = (postErrorBool) => ({
  type: SET_POST_ERROR,
  postErrorBool,
});

/** -------------------------------------------------------- */

/**                       **\
 * GET POSTS AND LOAD THEM *
 */
export const GET_DISHES = 'GET_DISHES';
export const LOAD_DISHES = 'LOAD_DISHES';
export const SET_DISHES = 'SET_DISHES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const DELETE_DISHE = 'DELETE_DISHE';
export const GET_DISHES_INFOS = 'GET_DISHES_INFOS';
export const PREPARE_DISHES_TO_BE_POSTED = 'PREPARE_DISHES_TO_BE_POSTED';
export const PREPARE_DISHES_TO_BE_EDITED = 'PREPARE_DISHES_TO_BE_EDITED';
export const POST_DISHE_TO_REST_API = 'POST_DISHE_TO_REST_API';
export const EDIT_DISHE_TO_REST_API = 'EDIT_DISHE_TO_REST_API';
export const TOGGLE_CHECKBOX_IN_WINE = 'TOGGLE_CHECKBOX_IN_WINE';
export const SET_DISHE_TO_PRIVATE = 'SET_DISHE_TO_PRIVATE';
export const SET_DISHE_TO_PRIVATE_IN_REST_API = 'SET_DISHE_TO_PRIVATE_IN_REST_API';

export const getDishes = (dishesSlug, dishesName) => ({
  type: GET_DISHES,
  dishesSlug,
  dishesName,
});

export const loadDishes = () => ({
  type: LOAD_DISHES,
});

export const setDishes = (dishes) => ({
  type: SET_DISHES,
  dishes,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const getDishesInfoToAdd = (identifier, dishesInfosToAdd) => ({
  type: GET_DISHES_INFOS,
  identifier,
  dishesInfosToAdd,
});

export const prepareDishesToBePoster = () => ({
  type: PREPARE_DISHES_TO_BE_POSTED,
});

export const setDisheToPrivate = (disheId, disheStatus) => ({
  type: SET_DISHE_TO_PRIVATE,
  disheId,
  disheStatus,
});

export const setDisheToPrivateInRestApi = () => ({
  type: SET_DISHE_TO_PRIVATE_IN_REST_API,
});

export const postDishesToRESTApi = () => ({
  type: POST_DISHE_TO_REST_API,
});

export const editDisheToRESTApi = () => ({
  type: EDIT_DISHE_TO_REST_API,
});

export const deleteDisheToRestApi = () => ({
  type: DELETE_DISHE,
});

/** -------------------------------------------------------- */

/**        **\
 * LOADING  *
 */
export const MANAGE_LOADING = 'MANAGE_LOADING';

export const setLoading = (isLoading) => ({
  type: MANAGE_LOADING,
  isLoading,
});

/** -------------------------------------------------------- */

/**             **\
 * MODAL CONTROL  *
 */
export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openAddModal = (disheName) => ({
  type: OPEN_ADD_MODAL,
  name: disheName,
});

export const openDeleteModal = (disheName, disheId) => ({
  type: OPEN_DELETE_MODAL,
  name: disheName,
  id: disheId,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openEditModal = (disheObject) => ({
  type: OPEN_EDIT_MODAL,
  disheObject,
});

/** -------------------------------------------------------- */
