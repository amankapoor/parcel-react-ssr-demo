// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import lightGreen from "@material-ui/core/colors/lightGreen";

const element = document.getElementById("app");

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: lightGreen
  },
  typography: {
    htmlFontSize: 12,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      `'Nunito', sans-serif`,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

const app = (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.Fragment>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === "production") {
  ReactDOM.hydrate(app, element);
} else {
  ReactDOM.render(app, element);
}

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
