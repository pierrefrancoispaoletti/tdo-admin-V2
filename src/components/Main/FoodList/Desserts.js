import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Container,
  Divider,
  Icon,
  Menu,
} from 'semantic-ui-react';

const Desserts = ({
  dishes,
  category,
  setCategory,
  openEditModal,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
}) => (
  <Container textAlign="center">
    {dishes.length > 0 && dishes[0].type === 'Desserts' && (
      <Menu compact size="mini">
        <Menu.Item
          name="All"
          active={category === 'All'}
          onClick={(e, { name }) => setCategory(name)}
        >
          Tous
        </Menu.Item>
        <Menu.Item
          name="hidden"
          active={category === 'hidden'}
          onClick={(e, { name }) => setCategory(name)}
        >
          <Icon name="hide" />
        </Menu.Item>
      </Menu>
    )}
    <Divider hidden />
    <Card.Group stackable>
      {dishes.map((dishe) => (
        <Card key={dishe.id}>
          <Card.Content>
            <Card.Header>{dishe.title.rendered}</Card.Header>
            <Card.Description>
              {dishe.content.rendered.replace(/(<([^>]+)>)/gi, '')}
            </Card.Description>
            <Card.Description>{dishe.meta.prix}€</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Button.Group size="mini">
              <Button
                color="green"
                icon
                labelPosition="left"
                onClick={() => openEditModal({ ...dishe })}
              >
                <Icon name="write" />
                Modifier
              </Button>
              <Button
                color="grey"
                icon
                labelPosition="left"
                onClick={() => {
                  setDisheToPrivate(dishe.id, dishe.status, dishe.slug);
                  setDisheToPrivateInRestApi();
                }}
              >
                <Icon name={dishe.status !== 'private' ? 'hide' : 'eye'} />
                {dishe.status !== 'private' ? 'Cacher' : 'Reveler'}
              </Button>
              <Button
                color="red"
                icon
                labelPosition="left"
                onClick={() => openDeleteModal(dishe.title.rendered, dishe.id, dishe.slug)}
              >
                <Icon name="trash alternate" />
                Supprimer
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Container>
);

Desserts.propTypes = {
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Desserts;
