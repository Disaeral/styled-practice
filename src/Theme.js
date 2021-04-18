import React from 'react'
import {ThemeProvider} from 'styled-components'

const theme = {
    colors: {
      navyBlue: "#03045eff",
      darkCornflowerBlue: "#023e8aff",
      starCommandBlue: "#0077b6ff",
      blueGreen: "#0096c7ff",
      ceruleanCrayola: "#00b4d8ff",
      skyBlueCrayola: "#48cae4ff",
      skyBlueCrayolaSec: "#90e0efff",
      blizzardBlue: "#ade8f4ff",
      powderBlue: "#caf0f8ff",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  };

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  export default Theme