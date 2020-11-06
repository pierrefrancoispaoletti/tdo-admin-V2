import { connect } from 'react-redux';

import {
  closeModal,
  getDishesInfoToAdd,
  prepareDishesToBePoster,
  postinFormErrorHandler,
} from 'src/actions/Tdo';

import AddModal from '../../components/AddModal/AddModal';

const mapStateToProps = (state) => ({
  postError: state.postError,
  currentDisheName: state.currentDisheName,
  openModal: state.isOpenAddModal,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
