import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

const EditHideUpdateButtons = ({
  openEditModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
  openDeleteModal,
  dishe,
}) => (
  <Card.Content extra textAlign="center">
    <Button
      color="green"
      icon={{ name: 'write' }}
      onClick={() => openEditModal({ ...dishe })}
    />
    <Button
      color="grey"
      icon
      onClick={() => {
        setDisheToPrivate(dishe.id, dishe.status, dishe.slug);
        setDisheToPrivateInRestApi();
      }}
    >
      <Icon name={dishe.status !== 'private' ? 'hide' : 'eye'} />
    </Button>
    <Button
      color="red"
      icon={{ name: 'trash alternate' }}
      onClick={() => openDeleteModal(dishe.title.rendered, dishe.id, dishe.slug)}
    />
  </Card.Content>
);

EditHideUpdateButtons.propTypes = {
  openEditModal: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  dishe: PropTypes.object.isRequired,
};

export default EditHideUpdateButtons;
