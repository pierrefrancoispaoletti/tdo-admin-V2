import { connect } from 'react-redux';

import Pizze from '../../components/Main/FoodList/Pizze';

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

export default connect(mapStateToProps, mapDispatchToProps)(Pizze);
