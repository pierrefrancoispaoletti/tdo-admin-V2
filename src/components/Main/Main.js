import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pizze from '../../Containers/FoodList/Pizze';
import Tagliate from '../../Containers/FoodList/Tagliate';
import LaCarne from '../../Containers/FoodList/LaCarne';
import Pasta from '../../Containers/FoodList/Pasta';
import Antipasti from '../../Containers/FoodList/Antipasti';
import Desserts from '../../Containers/FoodList/Desserts';
import Cichetteria from '../../Containers/FoodList/Cichetteria';
import Boissons from '../../Containers/FoodList/Boissons';
import Cocktails from '../../Containers/FoodList/Cocktails';
import Vins from '../../Containers/FoodList/Vins';

const Main = () => (
  <Switch>
    <Route path="/admin/pizzas">
      <Pizze />
    </Route>
    <Route path="/admin/tagliate">
      <Tagliate />
    </Route>
    <Route path="/admin/la_carne">
      <LaCarne />
    </Route>
    <Route path="/admin/ptes_et_risottos">
      <Pasta />
    </Route>
    <Route path="/admin/les_antipasti">
      <Antipasti />
    </Route>
    <Route path="/admin/les_desserts">
      <Desserts />
    </Route>
    <Route path="/admin/cichetteria">
      <Cichetteria />
    </Route>
    <Route path="/admin/les_boissons">
      <Boissons />
    </Route>
    <Route path="/admin/les_cocktails">
      <Cocktails />
    </Route>
    <Route path="/admin/vins">
      <Vins />
    </Route>
  </Switch>
);

export default Main;
