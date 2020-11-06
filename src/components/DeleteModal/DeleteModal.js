import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const DeleteModal = ({
  name,
  openModal,
  closeModal,
  deleteDisheToRestApi,
}) => (
  <Modal open={openModal}>
    <Modal.Header> Ètes vous sur de vouloir supprimer " {name} " ?</Modal.Header>
    <Modal.Content>
      <Button.Group>
        <Button
          negative
          icon
          labelPosition="right"
          onClick={() => deleteDisheToRestApi()}
        >
          <Icon name="trash alternate" />
          oui, supprimer
        </Button>
        <Button
          positive
          icon
          labelPosition="right"
          onClick={() => closeModal()}
        >
          <Icon name="cancel" />
          non, annuler
        </Button>
      </Button.Group>
    </Modal.Content>
  </Modal>
);

DeleteModal.propTypes = {
  name: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteDisheToRestApi: PropTypes.func.isRequired,
};

export default DeleteModal;
