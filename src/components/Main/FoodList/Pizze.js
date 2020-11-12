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

const Pizze = ({
  dishes,
  category,
  setCategory,
  openEditModal,
  openDeleteModal,
  setDisheToPrivate,
  setDisheToPrivateInRestApi,
}) => (
  <Container textAlign="center">
    {dishes.length > 0 && dishes[0].type === 'Pizze' && (
      <>
        <Menu compact size="mini">
          <Menu.Item
            name="All"
            active={category === 'All'}
            onClick={(e, { name }) => setCategory(name)}
          >
            Tous
          </Menu.Item>
          <Menu.Item
            name="les classiques"
            active={category === 'les classiques'}
            onClick={(e, { name }) => setCategory(name)}
          >
            Les Classiques
          </Menu.Item>
          <Menu.Item
            name="les créatives"
            active={category === 'les créatives'}
            onClick={(e, { name }) => setCategory(name)}
          >
            Les Créatives
          </Menu.Item>
          <Menu.Item
            name="hidden"
            active={category === 'hidden'}
            onClick={(e, { name }) => setCategory(name)}
          >
            <Icon name="hide" />
          </Menu.Item>
        </Menu>
      </>
    )}
    <Divider hidden />
    <Card.Group stackable>
      {dishes.map((dishe) => (
        <Card key={dishe.id}>
          <Card.Content>
            <Card.Header>{dishe.title.rendered}</Card.Header>
            <Card.Meta>{dishe.categories}</Card.Meta>
            <Card.Description>
              {dishe.content.rendered.replace(/(<([^>]+)>)/gi, '')}
            </Card.Description>
            <Card.Description>{dishe.meta.prix}€</Card.Description>
          </Card.Content>
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
        </Card>
      ))}
    </Card.Group>
  </Container>
);

Pizze.propTypes = {
  setDisheToPrivateInRestApi: PropTypes.func.isRequired,
  setDisheToPrivate: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pizze;
