import React from "react";
import { BrowserRouter , Route ,Switch,Redirect} from "react-router-dom";
import * as Pages from "../pages";
import Header from "../components/header/header";
import { AnimatePresence, motion } from "framer-motion";
const Router = () => {
const routes = [
    {
      path: "/Home",
      component: Pages.Home,
    },
    {
      path: "/SignIn",
      component: Pages.SignIn,
    },
    {
      path: "/Intro",
      component: Pages.Intro,
    },
    {
      path: "/FaceGame",
      component: Pages.FaceGame,
    }
  ];
  return (
    <BrowserRouter>
        <Header/>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route
                exact 
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
            
            </Switch>
            </AnimatePresence>
          )}
        />
    </BrowserRouter>
  );
};
export default Router;