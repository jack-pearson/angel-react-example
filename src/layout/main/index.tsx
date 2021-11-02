import React from "react";
import { Route, Switch } from "react-router-dom";
import { menuOption } from "../config";
import { NoComponent } from "@/components";
const Main = () => {
  return (
    <div className="main">
      <Switch>
        {menuOption.map((item) => {
          return (
            <Route exact path={item.path} key={item.path}>
              {item.component}
            </Route>
          );
        })}
        <Route exact path="*">
          <NoComponent />
        </Route>
      </Switch>
    </div>
  );
};
export default Main;
