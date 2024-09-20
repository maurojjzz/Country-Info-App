import { Box, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Home from "../home/Home";
import CountryInfo from "../countryInfo/CountryInfo";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.main,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:code" element={<CountryInfo />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
