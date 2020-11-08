import {
  POSTIN_FORM_ERROR, setPostError, postDishesToRESTApi,
} from 'src/actions/Tdo';

const postingErrorHandlerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POSTIN_FORM_ERROR: {
      const { dishesInfosToAdd } = store.getState();
      const objectValues = Object.values(dishesInfosToAdd);
      if (objectValues.some((value) => value === '') || objectValues.some((value) => value[0] === '')) {
        store.dispatch(setPostError(true));
      }
      else {
        store.dispatch(setPostError(false));
      }
      store.dispatch(postDishesToRESTApi());
      next(action);
      break;
    }
    // on ajouterai ici le handler pour une signalisation des erreurs dans les editions
    // cependant il faudrait exclure les champs descriptions et region car non obligatoires
    default:
      next(action);
  }
};

export default postingErrorHandlerMiddleware;
