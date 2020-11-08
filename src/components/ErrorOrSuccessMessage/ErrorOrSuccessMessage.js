import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Message, Transition } from 'semantic-ui-react';
import './errororsuccessmessages.scss';

const ErrorOrSuccessMessage = ({
  isSuccess,
  isError,
  setIfPostingIsSuccess,
  setIfPostingIsError,
  successMessage,
  errorMessage,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setIfPostingIsSuccess(false);
    }, 2000);
  }, [isSuccess]);
  useEffect(() => {
    setTimeout(() => {
      setIfPostingIsError(false);
    }, 2000);
  }, [isError]);
  return (
    <Container className="toggleErrorMessages" textAlign="center">
      <Transition visible={isSuccess} animation="drop" duration={500}>
        <Message
          positive
          header={successMessage.header}
          content={successMessage.content}
        />
      </Transition>
      <Transition visible={isError} animation="drop" duration={500}>
        <Message
          negative
          header={errorMessage.header}
          content={errorMessage.content}
        />
      </Transition>
    </Container>
  );
};

ErrorOrSuccessMessage.propTypes = {
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  setIfPostingIsSuccess: PropTypes.func.isRequired,
  setIfPostingIsError: PropTypes.func.isRequired,
  successMessage: PropTypes.object.isRequired,
  errorMessage: PropTypes.object.isRequired,
};

export default ErrorOrSuccessMessage;
