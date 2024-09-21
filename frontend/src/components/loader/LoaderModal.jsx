import { Box, useTheme } from "@mui/material";
import Loader from "./Loader";

const LoaderModal = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: theme.palette.card.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Loader size={128} dotSize={10} color="#000" speed="1s" spread="60deg" />
      </Box>
    </Box>
  );
};

export default LoaderModal;
