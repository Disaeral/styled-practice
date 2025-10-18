import { PropsWithChildren } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const palette = {
    navyBlue: "#03045eff",
    darkCornflowerBlue: "#023e8aff",
    starCommandBlue: "#0077b6ff",
    blueGreen: "#0096c7ff",
    ceruleanCrayola: "#00b4d8ff",
    skyBlueCrayola: "#48cae4ff",
    skyBlueCrayolaSec: "#90e0efff",
    blizzardBlue: "#ade8f4ff",
    powderBlue: "#caf0f8ff",
};

const typography = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small:  "1em",
    medium: "2em",
    large:  "3em"
  }
};

const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: palette.navyBlue,
    secondary: palette.darkCornflowerBlue
  }
}

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
