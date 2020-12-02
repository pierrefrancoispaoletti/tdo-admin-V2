import { connect } from 'react-redux';

import {
  userLogged,
} from 'src/actions/Tdo';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isLogged: state.isLogged,
});

const mapDispatchToProps = {
  userLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
