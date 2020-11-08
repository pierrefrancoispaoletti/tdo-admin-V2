import { connect } from 'react-redux';

import ErrorOrSuccessMessage from '../../components/ErrorOrSuccessMessage/ErrorOrSuccessMessage';

import {
  setIfPostingIsSuccess,
  setIfPostingIsError,
} from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  isSuccess: state.isSuccess,
  isError: state.isError,
  successMessage: state.successMessage,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = {
  setIfPostingIsSuccess,
  setIfPostingIsError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorOrSuccessMessage);
