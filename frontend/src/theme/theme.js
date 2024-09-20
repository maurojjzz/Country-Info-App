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
    fontFamily: [
        "HelveticaNowDisplay", 
        "sans-serif"
    ],
  },
});

export default theme;
