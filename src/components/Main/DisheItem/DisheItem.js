/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const DisheItem = ({ dishe }) => (
  <>
    <Card.Content>
      <Card.Header>{dishe.title.rendered}</Card.Header>
      {dishe.categories !== undefined
  && (<Card.Meta>{dishe.categories}</Card.Meta>)}
      <Card.Description>
        {dishe.content.rendered.replace(/(<([^>]+)>)/gi, '')}
      </Card.Description>
      <Card.Description>{dishe.meta.prix}€</Card.Description>
    </Card.Content>
    { dishe.meta.contenant !== undefined
    && (<Card.Content>Contenant: {dishe.meta.contenant}</Card.Content>)}
    { dishe.meta.region !== undefined && (<Card.Content>Région: {dishe.meta.region}</Card.Content>)}
    { dishe.meta.Couleur !== undefined && (
    <Card.Content>
      Couleurs Disponibles:{' '}
      {dishe.meta.Couleur !== undefined && dishe.meta.Couleur.join(' ')}
    </Card.Content>
    )}
  </>
);

DisheItem.propTypes = {
  dishe: PropTypes.object.isRequired,
};

export default DisheItem;
