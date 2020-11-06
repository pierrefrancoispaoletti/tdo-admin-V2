import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = ({ userSearchInput, getUserSearchInput, searchFunction }) => (
  <footer className="footer">
    <Form onSubmit={(e) => {
      e.preventDefault();
      searchFunction();
      console.log('prevented');
    }}
    >
      <Input
        onChange={(e) => {
          getUserSearchInput(e.target.value);
        }}
        value={userSearchInput}
        icon={{
          name: 'search',
          circular: true,
          color: 'teal',
          inverted: true,
        }}
        placeholder="Rechercher dans la page..."
      />
    </Form>
  </footer>
);

Footer.propTypes = {
  userSearchInput: PropTypes.string.isRequired,
  getUserSearchInput: PropTypes.func.isRequired,
  searchFunction: PropTypes.func.isRequired,
};

export default Footer;
