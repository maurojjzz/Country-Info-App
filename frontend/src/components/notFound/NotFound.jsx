import { Box, Typography, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography variant="h3" color="red" align="center">
        Country does not exist on database
      </Typography>
      <Typography variant="body1" color="initial">
        Going back to home page ...
      </Typography>
      <CircularProgress />
    </Box>
  );
};

export default NotFound;
