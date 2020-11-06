/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Form,
  Icon,
  Input,
  Message,
  Modal,
  Radio,
} from 'semantic-ui-react';
import { errorMessages } from '../../datas/messages';

const EditModal = ({
  postError,
  wineColorRed,
  wineColorWhite,
  wineColorRose,
  wineRegion,
  wineContent,
  currentDisheName,
  openModal,
  disheName,
  disheDescription,
  dishePrice,
  disheCategory,
  getDishesInfoToAdd,
  closeModal,
  postinFormErrorHandler,
  prepareDishesToBePoster,
  editDisheToRESTApi,
}) => (
  <Modal open={openModal}>
    <Modal.Header>Editer " {disheName} " </Modal.Header>
    <Modal.Content>
      <Form
        error={postError}
        onSubmit={(e) => {
          e.preventDefault();
          prepareDishesToBePoster();
          // @TODO ajouter un error handller ou modifier l'existant
          // je penche vers l'ajout d'un nouveau
          editDisheToRESTApi();
        }}
      >
        {postError
              && (
                <Message
                  error
                  header={errorMessages.postError.header}
                  content={errorMessages.postError.content}
                />
              )}
        <Form.Field>
          <label htmlFor="disheName">
            Nom
          </label>
          <Input
            id="disheName"
            placeholder="Marguerite..."
            value={disheName}
            onChange={(e) => {
              getDishesInfoToAdd(e.target.id, e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="disheDescription">
            Ingrédients / Description / Millésime
          </label>
          <Input
            id="disheDescription"
            placeholder="tomate, anchois..."
            value={disheDescription.replace(/(<([^>]+)>)/gi, '')}
            onChange={(e) => {
              getDishesInfoToAdd(e.target.id, e.target.value);
            }}
          />
        </Form.Field>
        {currentDisheName === 'Vins'
              && (
                <>
                  <Form.Field>
                    <label htmlFor="wineRegion">
                      Region du Vin
                    </label>
                    <Input
                      id="wineRegion"
                      placeholder="Corse, Espagne, Mexique..."
                      value={wineRegion}
                      onChange={(e) => {
                        getDishesInfoToAdd(e.target.id, e.target.value);
                      }}
                    />
                  </Form.Field>
                  <Form.Group grouped>
                    <label>Contenant</label>
                    <Form.Field
                      id="75cl"
                      control={Radio}
                      label="75 Cl"
                      value="75 cl"
                      checked={wineContent === '75 cl'}
                      onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                    />
                    <Form.Field
                      id="50cl"
                      control={Radio}
                      label="50 Cl"
                      value="50 cl"
                      checked={wineContent === '50 cl'}
                      onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group grouped>
                    <label>Couleurs</label>
                    <Form.Field
                      id="Rouge"
                      control="input"
                      type="checkbox"
                      label="Rouge"
                      value="Rouge"
                      checked={wineColorRed === 'Rouge'}
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          getDishesInfoToAdd(e.target.id, e.target.value);
                        }
                        else {
                          getDishesInfoToAdd(e.target.id, '');
                        }
                      }}
                    />
                    <Form.Field
                      id="Blanc"
                      control="input"
                      type="checkbox"
                      label="Blanc"
                      value="Blanc"
                      checked={wineColorWhite === 'Blanc'}
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          getDishesInfoToAdd(e.target.id, e.target.value);
                        }
                        else {
                          getDishesInfoToAdd(e.target.id, '');
                        }
                      }}
                    />
                    <Form.Field
                      id="Rosé"
                      control="input"
                      type="checkbox"
                      label="Rosé"
                      value="Rosé"
                      checked={wineColorRose === 'Rosé'}
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          getDishesInfoToAdd(e.target.id, e.target.value);
                        }
                        else {
                          getDishesInfoToAdd(e.target.id, '');
                        }
                      }}
                    />
                  </Form.Group>
                </>
              )}
        <Form.Field>
          <label htmlFor="dishePrice">
            Prix
          </label>
          <Input
            value={dishePrice}
            id="dishePrice"
            label={{ basic: true, content: '€' }}
            labelPosition="right"
            placeholder="12"
            onChange={(e) => {
              getDishesInfoToAdd(e.target.id, e.target.value);
            }}
          />
        </Form.Field>
        {currentDisheName === 'Pizze'
              && (
                <Form.Group grouped>
                  <label>Catégorie</label>
                  <Form.Field
                    id="Classiques"
                    control={Radio}
                    label="Les Classiques"
                    value="9"
                    checked={disheCategory === '9' || disheCategory === 'Les classiques'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                  <Form.Field
                    id="Créatives"
                    control={Radio}
                    label="Les Créatives"
                    value="11"
                    checked={disheCategory === '11' || disheCategory === 'Les créatives'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                </Form.Group>
              )}
        {currentDisheName === 'Cichetteria'
              && (
                <Form.Group grouped>
                  <label>Catégorie</label>
                  <Form.Field
                    id="Ce Soir"
                    control={Radio}
                    label="Ce Soir"
                    value="29"
                    checked={disheCategory === '29'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                  <Form.Field
                    id="La Truffe"
                    control={Radio}
                    label="La Truffe"
                    value="31"
                    checked={disheCategory === '31'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                </Form.Group>
              )}
        {currentDisheName === 'Boissons'
              && (
                <Form.Group grouped>
                  <label>Catégorie</label>
                  <Form.Field
                    id="Alcools"
                    control={Radio}
                    label="Alcools"
                    value="5"
                    checked={disheCategory === '5'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                  <Form.Field
                    id="Bières"
                    control={Radio}
                    label="Bières"
                    value="7"
                    checked={disheCategory === '7'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                  <Form.Field
                    id="Spiritueux"
                    control={Radio}
                    label="Spiritueux"
                    value="13"
                    checked={disheCategory === '13'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                  <Form.Field
                    id="Divers"
                    control={Radio}
                    label="Divers"
                    value="17"
                    checked={disheCategory === '17'}
                    onChange={(e) => getDishesInfoToAdd(e.target.id, e.target.value)}
                  />
                </Form.Group>
              )}
        <Divider />
        <Form.Group>
          <Button.Group>
            <Button color="red" icon labelPosition="right" onClick={() => closeModal()}>
              <Icon name="cancel" />
              Annuler
            </Button>
            <Button
              tyoe="submit"
              content="Editer"
              labelPosition="right"
              icon="write"
              positive
            />
          </Button.Group>
        </Form.Group>
      </Form>
    </Modal.Content>
  </Modal>
);

EditModal.propTypes = {
  postinFormErrorHandler: PropTypes.func.isRequired,
  editDisheToRESTApi: PropTypes.func.isRequired,
  postError: PropTypes.bool.isRequired,
  wineColorRed: PropTypes.string.isRequired,
  wineColorWhite: PropTypes.string.isRequired,
  wineColorRose: PropTypes.string.isRequired,
  wineContent: PropTypes.string.isRequired,
  wineRegion: PropTypes.string.isRequired,
  currentDisheName: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  getDishesInfoToAdd: PropTypes.func.isRequired,
  disheName: PropTypes.string.isRequired,
  disheDescription: PropTypes.string.isRequired,
  dishePrice: PropTypes.string.isRequired,
  disheCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  prepareDishesToBePoster: PropTypes.func.isRequired,
};

export default EditModal;
