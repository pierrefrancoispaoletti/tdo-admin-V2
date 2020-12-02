// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dimmer, Divider, Loader, Segment,
} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import PostTypeSelector from '../../Containers/PostTypeSelector/PostTypeSelector';
import Title from '../Title/Title';
import { postTypes } from '../../datas/posttypes';
import Main from '../Main/Main';
import Footer from '../../Containers/Footer/Footer';
import Login from '../../Containers/Login/Login';
import ErrorOrSuccessMessage from '../../Containers/ErrorOrSuccessMessage/ErrorOrSuccessMessage';
import { getToken, verifyToken } from '../../utils/utils';

// == Import
// import './styles.css';

// @TODO avec un use effect checker si le token de
// l'utilisateur est ok
// Si oui , ne pas afficher l'invite de login
// si non , l'afficher

// == Composant
const App = ({ isLoading, userLogged }) => {
  useEffect(() => {
    const token = getToken();
    verifyToken(token)
      .then(() => userLogged(true))
      .catch(() => userLogged(false));
  }, []);
  return (
    <div className="app">
      <Login />
      <Title />
      <ErrorOrSuccessMessage />
      <Divider />
      <PostTypeSelector postTypes={postTypes} />
      <Divider />
      {isLoading
        && (
          <Segment placeholder color="teal">
            <Dimmer active>
              <Loader>Chargement en cours</Loader>
            </Dimmer>
          </Segment>
        )}
      {!isLoading
        && (
          <Route path="/admin">
            <Main />
          </Route>
        )}
      <Divider section />
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
