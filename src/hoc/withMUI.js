import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange800, orange300 } from "@material-ui/core/colors";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: orange800,
    secondary: orange300
  }
});

function withMUI(Component) {
  function WithMUI(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithMUI;
}

export default withMUI;
