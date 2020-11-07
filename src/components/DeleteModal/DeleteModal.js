import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Icon, Modal, Transition,
} from 'semantic-ui-react';

const DeleteModal = ({
  name,
  openModal,
  closeModal,
  deleteDisheToRestApi,
}) => (
  <Transition visible={openModal} animation="tada" duration={300}>
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
            Oui, je supprime
          </Button>
          <Button
            positive
            icon
            labelPosition="right"
            onClick={() => closeModal()}
          >
            <Icon name="cancel" />
            Non, annuler
          </Button>
        </Button.Group>
      </Modal.Content>
    </Modal>
  </Transition>
);

DeleteModal.propTypes = {
  name: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteDisheToRestApi: PropTypes.func.isRequired,
};

export default DeleteModal;
