import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Icon, List, Transition,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddModal from '../../Containers/AddModal/AddModal';
import DeleteModal from '../../Containers/DeleteModal/DeleteModal';
import EditModal from '../../Containers/EditModal/EditModal';

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
    <Transition visible={showPostTypeList} animation="slide up" duration={400}>
      <List
        celled
      >
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
    </Transition>
    <Button
      circular
      size="massive"
      color="teal"
      icon={showPostTypeList ? { name: 'hide' } : { name: 'eye' }}
      onClick={() => togglePostTypeList()}
    />
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
