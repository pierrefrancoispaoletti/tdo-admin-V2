import { connect } from 'react-redux';

import PostTypeSelector from '../../components/PostTypeSelector/PostTypeSelector';

import { getDishes, loadDishes, openAddModal } from '../../actions/Tdo';

const mapDispatchToProps = {
  getDishes,
  loadDishes,
  openAddModal,
};

export default connect(null, mapDispatchToProps)(PostTypeSelector);
