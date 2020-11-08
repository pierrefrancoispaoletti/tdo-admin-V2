// == Import npm
import React from 'react';
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

// == Import
// import './styles.css';

// == Composant
const App = ({ isLoading }) => (
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
    <Route path="/">
      <Main />
    </Route>
    )}
    <Divider section />
    <Footer />
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

// == Export
export default App;
