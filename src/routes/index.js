import React, { createContext, useCallback } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Sigin from "../components/signin/signIn";
import TempScreen from "../screens/createTemp/create-temp";
import TemplateList from "../screens/TemplateList/TemplateList";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

const AllData = createContext();
const Routes = () => {
  const isAuthenticated = useCallback(() => {
    // return false;
    const auth = localStorage.getItem("jwt");
    return auth ? true : false;
  }, []);
  const dataa = { id: "", name: "", age: "", number: "" };
  return (
    <BrowserRouter>
      <AllData.Provider value={dataa}>
        <Switch>
          <PrivateRoute exact path="/" isAuthenticated={isAuthenticated}>
            <TemplateList />
          </PrivateRoute>
          <PublicRoute exact path="/login" isAuthenticated={isAuthenticated}>
            <Sigin />
          </PublicRoute>
          <PrivateRoute
            exact
            path="/create-template"
            isAuthenticated={isAuthenticated}
          >
            <TempScreen />
          </PrivateRoute>
        </Switch>
      </AllData.Provider>
    </BrowserRouter>
  );
};

export default Routes;
export { AllData };
