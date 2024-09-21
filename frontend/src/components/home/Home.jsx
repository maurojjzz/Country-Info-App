import { Box, useTheme/*, Typography*/ } from "@mui/material";
import FlagSection from "../flagSection/FlagSection";

import LoaderModal from "../loader/LoaderModal.jsx";

const Home = () => {
    const theme = useTheme()
  return (
    <Box
        sx={{
            backgroundColor: theme.palette.background.main,
            flexGrow: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
          
        }}
    >

      {/* <Typography variant="body1">input select should be here</Typography> */}

      <FlagSection />

      <LoaderModal />

    </Box>
  )
}

export default Home
