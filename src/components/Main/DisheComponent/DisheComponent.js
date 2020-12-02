import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Container,
  Divider,
} from 'semantic-ui-react';
import EditHideUpdateButtons from '../../EditHideUpdateButtons/EditHideUpdateButtons';
import DisheItem from '../DisheItem/DisheItem';

const DisheComponent = ({
  menu: Menu,
  dishes,
  category,
  setCategory,
  openEditModal,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
}) => (
  <Container textAlign="center">
    {dishes.length > 0 && category !== '' && (
    <Menu category={category} setCategory={setCategory} />
    )}
    <Divider hidden />
    <Card.Group stackable>
      {dishes.map((dishe) => (
        <Card key={dishe.id}>
          <DisheItem dishe={dishe} />
          <EditHideUpdateButtons
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
            setDisheToPrivate={setDisheToPrivate}
            setDisheToPrivateInRestApi={setDisheToPrivateInRestApi}
            dishe={dishe}
          />
        </Card>
      ))}
    </Card.Group>
  </Container>
);

DisheComponent.propTypes = {
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  menu: PropTypes.elementType.isRequired,
};

export default DisheComponent;
