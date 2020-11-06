import { connect } from 'react-redux';

import Footer from '../../components/Footer/Footer';

import {
  getUserSearchInput,
  searchFunction,
} from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  userSearchInput: state.userSearchInput,
});

const mapDispatchToProps = {
  getUserSearchInput,
  searchFunction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
