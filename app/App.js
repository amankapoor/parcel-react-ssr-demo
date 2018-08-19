// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import Main from "./src/main";
import NotFound from "./src/components/notFound";

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700|Parisienne"
          rel="stylesheet"
        />
        <title>
          Parcel React SSR Demo
        </title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
