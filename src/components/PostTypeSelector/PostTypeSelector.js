import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Icon, List,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddModal from '../../Containers/AddModal/AddModal';
import DeleteModal from '../../Containers/DeleteModal/DeleteModal';
import EditModal from '../../Containers/EditModal/EditModal';

import './posttypeselector.scss';

const PostTypeSelector = ({
  postTypes,
  getDishes,
  loadDishes,
  openAddModal,
  togglePostTypeList,
  showPostTypeList,
}) => (
  <Container textAlign="center">
    <AddModal />
    <DeleteModal />
    <EditModal />
    <List celled className={!showPostTypeList ? 'posttype_List--hidden' : 'posttype_List'}>
      {postTypes.map((postType) => (
        <List.Item key={postType.slug}>
          <List.Content floated="right">
            <Button
              size="mini"
              primary
              icon
              labelPosition="left"
              onClick={() => {
                getDishes(postType.slug);
                openAddModal(postType.name);
              }}
            >
              <Icon name="add" />
              Ajouter
            </Button>
            <Link to={`/${postType.slug}`}>
              <Button
                size="mini"
                color="green"
                icon
                labelPosition="left"
                onClick={() => {
                  getDishes(postType.slug, postType.name);
                  loadDishes();
                }}
              >
                <Icon name="search" />
                Voir
              </Button>
            </Link>
          </List.Content>
          <List.Content>
            <List.Header>{postType.name}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
    <Button color="green" icon={showPostTypeList ? { name: 'hide' } : { name: 'eye' }} onClick={() => (togglePostTypeList())} />
  </Container>
);

PostTypeSelector.propTypes = {
  showPostTypeList: PropTypes.bool.isRequired,
  togglePostTypeList: PropTypes.func.isRequired,
  getDishes: PropTypes.func.isRequired,
  loadDishes: PropTypes.func.isRequired,
  openAddModal: PropTypes.func.isRequired,
  postTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostTypeSelector;
