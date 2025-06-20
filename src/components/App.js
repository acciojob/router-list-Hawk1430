import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ItemList} />
        <Route path="/items/:id" component={ItemDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
