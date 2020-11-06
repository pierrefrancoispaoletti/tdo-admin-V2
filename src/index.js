// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
import 'semantic-ui-css/semantic.min.css';
// Composants
import App from 'src/Containers/App/App';
import store from './store/store';

const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  target,
);
