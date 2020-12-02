import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';

const DisheMenuVins = ({ category, setCategory }) => (
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
);

DisheMenuVins.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default DisheMenuVins;
