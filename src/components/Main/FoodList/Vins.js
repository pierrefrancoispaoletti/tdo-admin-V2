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

const Vins = ({
  dishes: wines,
  category,
  setCategory,
  openEditModal,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
}) => (
  <Container textAlign="center">
    {wines.length > 0 && wines[0].type === 'Vins' && (
      <Menu compact size="mini">
        <Menu.Item
          name="All"
          active={category === 'All'}
          onClick={(e, { name }) => setCategory(name)}
        >
          Tous
        </Menu.Item>
        <Menu.Item
          name="Rouge"
          active={category === 'Rouge'}
          onClick={(e, { name }) => setCategory(name)}
        >
          Rouge
        </Menu.Item>
        <Menu.Item
          name="Blanc"
          active={category === 'Blanc'}
          onClick={(e, { name }) => setCategory(name)}
        >
          Blanc
        </Menu.Item>
        <Menu.Item
          name="Rosé"
          active={category === 'Rosé'}
          onClick={(e, { name }) => setCategory(name)}
        >
          Rosé
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
      {wines.map((wine) => (
        <Card key={wine.id}>
          <Card.Content>
            <Card.Header>{wine.title.rendered}</Card.Header>
            <Card.Description>
              {wine.content.rendered.replace(/(<([^>]+)>)/gi, '')}
            </Card.Description>
            <Card.Description>{wine.meta.prix}€</Card.Description>
          </Card.Content>
          <Card.Content>Région: {wine.meta.region}</Card.Content>
          {wine.meta.Couleur !== undefined && (
            <Card.Content>
              Couleurs Disponibles:{' '}
              {wine.meta.Couleur !== undefined && wine.meta.Couleur.join(' ')}
            </Card.Content>
          )}
          <Card.Content extra textAlign="center">
            <Button
              color="green"
              icon={{ name: 'write' }}
              onClick={() => openEditModal({ ...wine })}
            />
            <Button
              color="grey"
              icon
              onClick={() => {
                setDisheToPrivate(wine.id, wine.status, wine.slug);
                setDisheToPrivateInRestApi();
              }}
            >
              <Icon name={wine.status !== 'private' ? 'hide' : 'eye'} />
            </Button>
            <Button
              color="red"
              icon={{ name: 'trash alternate' }}
              onClick={() => openDeleteModal(wine.title.rendered, wine.id, wine.slug)}
            />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Container>
);

Vins.propTypes = {
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Vins;
