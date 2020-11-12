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

const Cocktails = ({
  dishes: drinks,
  category,
  setCategory,
  openEditModal,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
}) => (
  <Container textAlign="center">
    {drinks.length > 0 && drinks[0].type === 'Cocktails' && (
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
      {drinks.map((drink) => (
        <Card key={drink.id}>
          <Card.Content>
            <Card.Header>{drink.title.rendered}</Card.Header>
            <Card.Description>
              {drink.content.rendered.replace(/(<([^>]+)>)/gi, '')}
            </Card.Description>
            <Card.Description>{drink.meta.prix}€</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Button
              color="green"
              icon={{ name: 'write' }}
              onClick={() => openEditModal({ ...drink })}
            />
            <Button
              color="grey"
              icon
              onClick={() => {
                setDisheToPrivate(drink.id, drink.status, drink.slug);
                setDisheToPrivateInRestApi();
              }}
            >
              <Icon name={drink.status !== 'private' ? 'hide' : 'eye'} />
            </Button>
            <Button
              color="red"
              icon={{ name: 'trash alternate' }}
              onClick={() => openDeleteModal(drink.title.rendered, drink.id, drink.slug)}
            />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Container>
);

Cocktails.propTypes = {
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cocktails;
