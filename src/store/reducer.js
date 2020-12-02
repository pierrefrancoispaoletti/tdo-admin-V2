import {
  GET_USER_LOGIN,
  USER_LOGGED,
  LOGIN_FORM_ERROR,
  GET_DISHES,
  SET_DISHES,
  SET_CATEGORY,
  MANAGE_LOADING,
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_MODAL,
  GET_DISHES_INFOS,
  PREPARE_DISHES_TO_BE_POSTED,
  SET_POST_ERROR,
  SET_DISHE_TO_PRIVATE,
  OPEN_EDIT_MODAL,
  TOGGLE_POST_TYPE_LIST,
  GET_USER_SEARCH_INPUT,
  SET_SEARCH_RESULTS,
  SET_IF_POSTING_IS_SUCCESS,
  SET_IF_POSTING_IS_ERROR,
  SET_DISHES_CATEGORY,
} from '../actions/Tdo';
import categories from '../datas/categories';
import { convertCategoryNameToId } from '../utils/utils';

const initialState = {
  userInputLogin: '',
  userInputPassword: '',
  logError: false,
  postError: false,

  showPostTypeList: false,

  dishesCategory: '',

  allDishes: [],
  dishesToLoad: [],
  dishesCategoryToLoad: [],
  category: '',

  currentDisheName: '',
  disheNameToAdd: '',
  isOpenAddModal: false,
  disheName: '',
  disheDescription: '',
  dishePrice: '',
  disheCategory: '',

  wineRegion: '',
  wineContent: '',
  wineColorRed: '',
  wineColorWhite: '',
  wineColorRose: '',
  wineColors: [],

  dishesInfosToAdd: {},

  isOpenDeleteModal: false,
  disheNameToDelete: '',

  disheId: '',
  disheStatus: '',

  isOpenEditModal: false,
  disheObject: {},
  isLogged: false,

  isLoading: false,
  userSearchInput: '',
  // aparition ou non du message d'erreur /succes au post ou a l'edition
  isSuccess: false,
  isError: false,
  successMessage: {},
  errorMessage: {},

  // afin d'afficher un message sur les resultats de recherche
  searchResults: 5,
};

function reducer(state = initialState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_POST_TYPE_LIST:
      newState.showPostTypeList = !newState.showPostTypeList;
      break;
    case GET_USER_SEARCH_INPUT:
      newState.userSearchInput = action.userSearchInput.toLowerCase();
      break;
    case SET_SEARCH_RESULTS:
      newState.userSearchInput = '';
      break;
    case GET_USER_LOGIN:
      switch (action.identifier) {
        case 'login':
          newState.userInputLogin = action.userInput;
          break;
        case 'password':
          newState.userInputPassword = action.userInput;
          break;
        default:
          break;
      }
      break;
    case USER_LOGGED:
      newState.isLogged = action.logged;
      break;
    case LOGIN_FORM_ERROR:
      newState.logError = action.logError;
      break;
    case GET_DISHES:
      newState.dishesCategory = action.dishesSlug;
      newState.currentDisheName = action.dishesName;
      break;
    case SET_DISHES:
      newState.allDishes = action.dishes;
      newState.dishesToLoad = action.dishes;
      break;
    case SET_DISHES_CATEGORY:
      newState.dishesCategory = action.dishesCategory;
      break;
    case SET_CATEGORY:
      newState.category = '';
      newState.category = action.category;
      switch (action.category) {
        case 'les classiques':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Les classiques',
          );
          break;
        case 'les créatives':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Les créatives',
          );
          break;
        case 'A la carte de soir':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'A la carte de soir',
          );
          break;
        case 'Le coin de la Truffe':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Le coin de la Truffe',
          );
          break;
        case 'Alcools':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Alcools',
          );
          break;
        case 'Bières':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Bières',
          );
          break;
        case 'Spiritueux':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'Spiritueux',
          );
          break;
        case 'zdivers':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.categories[0] === 'zdivers',
          );
          break;
        case 'Rouge':
          newState.dishesToLoad = state.allDishes.filter((dishes) => dishes.meta.Couleur.includes('Rouge'));
          break;
        case 'Blanc':
          newState.dishesToLoad = state.allDishes.filter((dishes) => dishes.meta.Couleur.includes('Blanc'));
          break;
        case 'Rosé':
          newState.dishesToLoad = state.allDishes.filter((dishes) => dishes.meta.Couleur.includes('Rosé'));
          break;
        case 'All':
          newState.dishesToLoad = state.allDishes;
          break;
        case 'hidden':
          newState.dishesToLoad = state.allDishes.filter(
            (dishes) => dishes.status === 'private',
          );
          break;
        default:
          break;
      }
      break;
    case MANAGE_LOADING:
      newState.isLoading = action.isLoading;
      break;
    case OPEN_ADD_MODAL:
      newState.dishesInfosToAdd = {};
      newState.currentDisheName = action.name;
      newState.disheName = '';
      newState.disheDescription = '';
      newState.dishePrice = '';
      newState.disheCategory = '';
      newState.wineRegion = '';
      newState.wineContent = '';
      newState.wineColorRed = '';
      newState.wineColorWhite = '';
      newState.wineColorRose = '';
      newState.isOpenAddModal = true;
      break;
    case OPEN_EDIT_MODAL: {
      newState.disheName = '';
      newState.disheDescription = '';
      newState.dishePrice = '';
      newState.disheCategory = '';
      newState.wineRegion = '';
      newState.wineContent = '';
      newState.wineColorRed = '';
      newState.wineColorWhite = '';
      newState.wineColorRose = '';
      newState.disheObject = action.disheObject;
      newState.currentDisheName = action.disheObject.type;
      newState.dishesCategory = action.disheObject.slug;
      newState.isOpenEditModal = true;
      newState.disheId = action.disheObject.id;
      newState.disheName = action.disheObject.title.rendered;
      newState.disheDescription = action.disheObject.content.rendered
        .replace('<!-- wp:paragraph -->', '')
        .replace('<!-- /wp:paragraph -->', '');
      newState.dishePrice = action.disheObject.meta.prix;
      if (
        newState.currentDisheName === 'Pizze'
        || newState.currentDisheName === 'Boissons'
        || newState.currentDisheName === 'Cichetteria'
      ) {
        // eslint-disable-next-line max-len
        newState.disheCategory = convertCategoryNameToId(
          action.disheObject.categories[0],
          categories,
        );
      }
      if (newState.currentDisheName === 'Vins') {
        newState.wineRegion = action.disheObject.meta.region;
        // eslint-disable-next-line prefer-destructuring
        newState.wineContent = action.disheObject.meta.contenant[0];
        newState.wineColorRed = action.disheObject.meta.Couleur.includes(
          'Rouge',
        )
          ? 'Rouge'
          : '';
        newState.wineColorWhite = action.disheObject.meta.Couleur.includes(
          'Blanc',
        )
          ? 'Blanc'
          : '';
        newState.wineColorRose = action.disheObject.meta.Couleur.includes(
          'Rosé',
        )
          ? 'Rosé'
          : '';
      }
      break;
    }
    case OPEN_DELETE_MODAL:
      newState.disheId = action.id;
      newState.disheNameToDelete = action.name;
      newState.dishesCategory = action.disheSlug;
      newState.isOpenDeleteModal = true;
      break;
    case CLOSE_MODAL:
      newState.isOpenEditModal = false;
      newState.isOpenDeleteModal = false;
      newState.isOpenAddModal = false;
      newState.postError = false;
      newState.dishesInfosToAdd = {};
      break;
    case GET_DISHES_INFOS:
      switch (action.identifier) {
        case 'disheName':
          newState.disheName = action.dishesInfosToAdd;
          break;
        case 'disheDescription':
          newState.disheDescription = action.dishesInfosToAdd;
          break;
        case 'dishePrice':
          newState.dishePrice = action.dishesInfosToAdd;
          break;
        case 'wineRegion':
          newState.wineRegion = action.dishesInfosToAdd;
          break;
        case '75cl':
          newState.wineContent = action.dishesInfosToAdd;
          break;
        case '50cl':
          newState.wineContent = action.dishesInfosToAdd;
          break;
        case 'Rouge':
          newState.wineColorRed = action.dishesInfosToAdd;
          break;
        case 'Blanc':
          newState.wineColorWhite = action.dishesInfosToAdd;
          break;
        case 'Rosé':
          newState.wineColorRose = action.dishesInfosToAdd;
          break;
        case 'Classiques':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Créatives':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Ce Soir':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'La Truffe':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Alcools':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Bières':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Spiritueux':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        case 'Divers':
          newState.disheCategory = action.dishesInfosToAdd;
          break;
        default:
          break;
      }
      break;
    case PREPARE_DISHES_TO_BE_POSTED: {
      const newWineArray = [];
      newState.dishesInfosToAdd.title = newState.disheName;
      newState.dishesInfosToAdd.content = newState.disheDescription;
      newState.dishesInfosToAdd.prix = newState.dishePrice;
      newState.dishesInfosToAdd.status = 'publish';
      if (
        newState.currentDisheName === 'Pizze'
        || newState.currentDisheName === 'Boissons'
        || newState.currentDisheName === 'Cichetteria'
      ) {
        newState.dishesInfosToAdd.categories = [newState.disheCategory];
      }
      // pour rendre non indispensable le champ description selon la categorie
      if (
        newState.disheDescription === ''
        && newState.currentDisheName !== 'Pizze'
      ) {
        newState.disheDescription = ' ';
        newState.dishesInfosToAdd.content = ' ';
      }
      if (newState.currentDisheName === 'Vins') {
        // pour rendre non indispensable le champ region dans les vins
        if (newState.wineRegion === '') {
          newState.wineRegion = ' ';
          newState.dishesInfosToAdd.region = ' ';
        }
        else {
          newState.dishesInfosToAdd.region = newState.wineRegion;
        }
        newState.dishesInfosToAdd.contenant = [newState.wineContent];
        newWineArray.push(
          newState.wineColorRed,
          newState.wineColorWhite,
          newState.wineColorRose,
        );
        const filteredArray = newWineArray.filter((e) => e !== '');
        newState.dishesInfosToAdd.Couleur = [...filteredArray];
      }
      break;
    }
    case SET_POST_ERROR:
      newState.postError = action.postErrorBool;
      break;
    case SET_DISHE_TO_PRIVATE:
      newState.dishesCategory = action.disheSlug;
      newState.disheId = action.disheId;
      newState.disheStatus = action.disheStatus;
      break;
    case SET_IF_POSTING_IS_SUCCESS:
      newState.isSuccess = action.isSuccess;
      newState.successMessage = action.successMessage;
      break;
    case SET_IF_POSTING_IS_ERROR:
      newState.isError = action.isError;
      newState.errorMessage = action.errorMessage;
      break;
    default:
      return state;
  }
  return newState;
}

export default reducer;
