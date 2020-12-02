import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';

const DisheMenuBoissons = ({ category, setCategory }) => (
  <Menu compact size="mini">
    <Menu.Item
      name="All"
      active={category === 'All'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Tous
    </Menu.Item>

    <Menu.Item
      name="Alcools"
      active={category === 'Alcools'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Alcools
    </Menu.Item>
    <Menu.Item
      name="Bières"
      active={category === 'Bières'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Bières
    </Menu.Item>
    <Menu.Item
      name="Spiritueux"
      active={category === 'Spiritueux'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Spiritueux
    </Menu.Item>
    <Menu.Item
      name="zdivers"
      active={category === 'zdivers'}
      onClick={(e, { name }) => setCategory(name)}
    >
      Divers
    </Menu.Item>
    <Menu.Item
      name="hidden"
      active={category === 'hidden'}
      onClick={(e, { name }) => setCategory(name)}
      icon
    >
      <Icon name="hide" />
    </Menu.Item>
  </Menu>
);

DisheMenuBoissons.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default DisheMenuBoissons;
