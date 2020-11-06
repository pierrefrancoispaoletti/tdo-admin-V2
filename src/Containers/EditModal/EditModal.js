import { connect } from 'react-redux';

import {
  closeModal,
  getDishesInfoToAdd,
  prepareDishesToBePoster,
  postinFormErrorHandler,
  editDisheToRESTApi,
} from 'src/actions/Tdo';

import EditModal from '../../components/EditModal/EditModal';

const mapStateToProps = (state) => ({
  postError: state.postError,
  currentDisheName: state.currentDisheName,
  openModal: state.isOpenEditModal,
  disheName: state.disheName,
  disheDescription: state.disheDescription,
  dishePrice: state.dishePrice,
  disheCategory: state.disheCategory,
  wineRegion: state.wineRegion,
  wineContent: state.wineContent,
  wineColorRed: state.wineColorRed,
  wineColorWhite: state.wineColorWhite,
  wineColorRose: state.wineColorRose,
});

const mapDispatchToProps = {
  closeModal,
  getDishesInfoToAdd,
  prepareDishesToBePoster,
  postinFormErrorHandler,
  editDisheToRESTApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
