import { Box, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";

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
            <Route path="/" element={<div> Home ee </div>} />
            <Route path="/countries" element={<div> Countries ee </div>} />
        </Routes>

      </Box>
    </Box>
  );
};

export default Layout;
