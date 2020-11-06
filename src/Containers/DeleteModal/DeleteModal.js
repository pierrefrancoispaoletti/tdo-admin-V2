import { connect } from 'react-redux';

import {
  closeModal,
  deleteDisheToRestApi,
} from 'src/actions/Tdo';

import DeleteModal from '../../components/DeleteModal/DeleteModal';

const mapStateToProps = (state) => ({
  openModal: state.isOpenDeleteModal,
  name: state.disheNameToDelete,
  id: state.disheId,
  slug: state.dishesCategory,
});

const mapDispatchToProps = {
  closeModal,
  deleteDisheToRestApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
