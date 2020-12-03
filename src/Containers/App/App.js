import { connect } from 'react-redux';

import {
  userLogged,
  setLoading,
} from 'src/actions/Tdo';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  userLogged,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
