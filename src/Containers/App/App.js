import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, null)(App);
