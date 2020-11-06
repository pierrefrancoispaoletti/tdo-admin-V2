import { connect } from 'react-redux';

import Pasta from '../../components/Main/FoodList/Pasta';

import {
  setCategory, openDeleteModal, setDisheToPrivate, setDisheToPrivateInRestApi, openEditModal,
} from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  dishes: state.dishesToLoad,
  category: state.category,
});

const mapDispatchToProps = {
  openEditModal,
  setCategory,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pasta);
