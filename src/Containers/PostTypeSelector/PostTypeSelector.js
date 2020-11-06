import { connect } from 'react-redux';

import PostTypeSelector from '../../components/PostTypeSelector/PostTypeSelector';

import {
  getDishes, loadDishes, openAddModal, togglePostTypeList,
} from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  showPostTypeList: state.showPostTypeList,
});

const mapDispatchToProps = {
  getDishes,
  loadDishes,
  openAddModal,
  togglePostTypeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTypeSelector);
