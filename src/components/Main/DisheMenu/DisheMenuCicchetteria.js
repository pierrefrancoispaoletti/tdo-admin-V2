import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';

const DisheMenuCicchetteria = ({ category, setCategory }) => (
  <Menu compact size="mini">
    <Menu.Item
      name="All"
      active={category === 'All'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Tous
    </Menu.Item>

    <Menu.Item
      name="A la carte de soir"
      active={category === 'A la carte de soir'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Ce Soir
    </Menu.Item>
    <Menu.Item
      name="Le coin de la Truffe"
      active={category === 'Le coin de la Truffe'}
      onClick={(e, { name }) => setCategory(name)}
    >
      La Truffe
    </Menu.Item>

    <Menu.Item
      name="hidden"
      active={category === 'hidden'}
      onClick={(e, { name }) => setCategory(name)}
    >
      <Icon name="hide" />
    </Menu.Item>
  </Menu>
);

DisheMenuCicchetteria.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default DisheMenuCicchetteria;
