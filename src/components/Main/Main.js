import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { postTypes as PostTypes } from '../../datas/posttypes';

const Main = () => (
  <Switch>
    {PostTypes.map((posttype) => (
      <Route key={posttype.name} path={`/admin/${posttype.slug}`}>
        <posttype.component menu={posttype.menu} name={posttype.name} />
      </Route>
    ))}
  </Switch>
);

export default Main;
