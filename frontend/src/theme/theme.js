import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#101417",
    },
    secondary: {
      main: "#262b2c",
    },
    background: {
      main: "#CCD0D4",
    },
    card: {
      main: "#fffefe",
    },
    gray: {
      main: "#6a719a",
    },
  },
  typography: {
    fontFamily: ["HelveticaNowDisplay", "sans-serif"],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      custom: 750,
    },
  },
});

export default theme;
