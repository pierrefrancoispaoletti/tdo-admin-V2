import { connect } from 'react-redux';

import Login from '../../components/Login/Login';

import { changeLoginValue, loggingAttempt } from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  login: state.userInputLogin,
  password: state.userInputPassword,
  isLogged: state.isLogged,
  logError: state.logError,
});

const mapDispatchToProps = {
  changeLoginValue,
  loggingAttempt,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
