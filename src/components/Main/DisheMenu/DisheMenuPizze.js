import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';

const DisheMenuPizze = ({ category, setCategory }) => (
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
);

DisheMenuPizze.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default DisheMenuPizze;
