import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Message, Modal,
} from 'semantic-ui-react';
import { errorMessages } from '../../datas/messages';

const Login = ({
  isLogged,
  logError,
  login,
  password,
  changeLoginValue,
  loggingAttempt,
}) => (
  <Modal open={!isLogged}>
    <Modal.Header>Connexion</Modal.Header>
    <Modal.Content>
      <Form
        error={logError}
        onSubmit={(e) => {
          e.preventDefault();
          loggingAttempt();
        }}
      >
        {logError
        && (
        <Message
          error
          header={errorMessages.loginError.header}
          content={errorMessages.loginError.content}
        />
        )}
        <Form.Field>
          <label htmlFor="login">Login
            <input
              id="login"
              placeholder="Login"
              value={login}
              onChange={(e) => changeLoginValue(e.target.id, e.target.value)}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => changeLoginValue(e.target.id, e.target.value)}
            />
          </label>
        </Form.Field>
        <Button
          type="submit"
          color="green"
          floated="right"
        >
          Connexion
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

Login.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeLoginValue: PropTypes.func.isRequired,
  loggingAttempt: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logError: PropTypes.bool.isRequired,
};
export default Login;
