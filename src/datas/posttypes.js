import DisheMenuPizze from '../components/Main/DisheMenu/DisheMenuPizze';
import DisheMenuCicchetteria from '../components/Main/DisheMenu/DisheMenuCicchetteria';
import DisheMenuVins from '../components/Main/DisheMenu/DisheMenuVins';
import DisheMenuBoissons from '../components/Main/DisheMenu/DisheMenuBoissons';
import DisheComponent from '../Containers/DisheComponent/DisheComponent';
import DisheMenuDefault from '../components/Main/DisheMenu/DisheMenuDefault';

// eslint-disable-next-line import/prefer-default-export
export const postTypes = [
  {
    name: 'Pizze',
    slug: 'pizzas',
    component: DisheComponent,
    menu: DisheMenuPizze,
  },
  {
    name: 'Tagliates',
    slug: 'tagliate',
    component: DisheComponent,
    menu: DisheMenuDefault,

  },
  {
    name: 'La Carne',
    slug: 'la_carne',
    component: DisheComponent,
    menu: DisheMenuDefault,
  },
  {
    name: 'Antipasti',
    slug: 'les_antipasti',
    component: DisheComponent,
    menu: DisheMenuDefault,
  },
  {
    name: 'Pasta e Risotti',
    slug: 'ptes_et_risottos',
    component: DisheComponent,
    menu: DisheMenuDefault,
  },
  {
    name: 'Cichetteria',
    slug: 'cichetteria',
    component: DisheComponent,
    menu: DisheMenuCicchetteria,
  },
  {
    name: 'Desserts',
    slug: 'les_desserts',
    component: DisheComponent,
    menu: DisheMenuDefault,
  },
  {
    name: 'Vins',
    slug: 'vins',
    component: DisheComponent,
    menu: DisheMenuVins,
  },
  {
    name: 'Cocktails',
    slug: 'les_cocktails',
    component: DisheComponent,
    menu: DisheMenuDefault,
  },
  {
    name: 'Boissons',
    slug: 'les_boissons',
    component: DisheComponent,
    menu: DisheMenuBoissons,
  },

];
