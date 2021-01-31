import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes/Routes";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={routes[0].component} />
        {routes.map((route) => {
          const { path, ...props } = route;
          return <Route key={path} path={path} {...props} />;
        })}
      </Switch>
    </HashRouter>
  );
};

export default App;
