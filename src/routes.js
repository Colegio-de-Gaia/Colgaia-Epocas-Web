import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { DayPage } from "./pages/DayPage";
import { Advento } from "./pages/Advento";
import { Velas } from "./pages/Velas";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/day/:id" component={DayPage} />
      <Route exact path="/o-que-e" component={Advento} />
      <Route exact path="/velas" component={Velas} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
