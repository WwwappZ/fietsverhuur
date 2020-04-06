import React, { Component } from "react";
import { Route } from "react-router-dom";
import RequireAuthAdmin from "../../Auth/require_auth_admin";
import LeverancierEditPage from "./edit";
import LeverancierPage from "./";
import LeverancierInsertPage from "./insert";

class Bedrijven extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/admin/leverancier"
          component={RequireAuthAdmin(LeverancierPage)}
        />
        <Route
          exact
          path="/admin/leverancier/insert"
          component={RequireAuthAdmin(LeverancierInsertPage)}
        />
        <Route
          exact
          path="/admin/leverancier/edit/:id"
          component={RequireAuthAdmin(LeverancierEditPage)}
        />
      </React.Fragment>
    );
  }
}

export default Bedrijven;
