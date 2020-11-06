import { connect } from 'react-redux';

import Boissons from '../../components/Main/FoodList/Boissons';

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

export default connect(mapStateToProps, mapDispatchToProps)(Boissons);
