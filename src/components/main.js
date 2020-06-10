import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RootRoutes from "./RootRoutes";

const Main = () => (
  <Switch>
      {
          RootRoutes.map( (route,index) => (
              <Route
                  key={index}
                  {...route}
              />
          ))
      }
  </Switch>
)

export default Main;
