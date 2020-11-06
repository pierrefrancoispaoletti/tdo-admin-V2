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
    <Route exact path="/pizzas">
      <Pizze />
    </Route>
    <Route exact path="/tagliate">
      <Tagliate />
    </Route>
    <Route exact path="/la_carne">
      <LaCarne />
    </Route>
    <Route exact path="/ptes_et_risottos">
      <Pasta />
    </Route>
    <Route exact path="/les_antipasti">
      <Antipasti />
    </Route>
    <Route exact path="/les_desserts">
      <Desserts />
    </Route>
    <Route exact path="/cichetteria">
      <Cichetteria />
    </Route>
    <Route exact path="/les_boissons">
      <Boissons />
    </Route>
    <Route exact path="/les_cocktails">
      <Cocktails />
    </Route>
    <Route exact path="/vins">
      <Vins />
    </Route>
  </Switch>
);

export default Main;
