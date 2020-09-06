import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";
import SearchPage from "./pages/SearchPage";

const GoogleClone = (props) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Route path={props.match.url + "/search"}>
        <SearchPage />
      </Route>
      <Route exact path={props.match.url}>
        <Home />
      </Route>
    </StateProvider>
  );
};

export default GoogleClone;
