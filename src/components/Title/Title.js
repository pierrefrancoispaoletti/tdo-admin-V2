import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

import './title.scss';

const Title = () => (
  <Container className="container__title">
    <Header as="h1">
      <Icon name="settings" color="teal" />
      <Header.Content>
        Le Temps des Oliviers
        <Header.Subheader>Administration du site</Header.Subheader>
      </Header.Content>
    </Header>
  </Container>
);

export default Title;
