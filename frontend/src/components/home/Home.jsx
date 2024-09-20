import { Box, useTheme/*, Typography*/ } from "@mui/material";
import FlagSection from "../flagSection/FlagSection";

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

    </Box>
  )
}

export default Home
