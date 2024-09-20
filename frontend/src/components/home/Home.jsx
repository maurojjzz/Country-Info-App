import { Box, useTheme, Typography } from "@mui/material";
import FlagSection from "../flagSection/FlagSection";

const Home = () => {
    const theme = useTheme()
  return (
    <Box
        sx={{
            backgroundColor: theme.palette.background.main,
            border: "1px solid black",
            flexGrow: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
          
        }}
    >

      <Typography variant="body1">los selects</Typography>

      <FlagSection />

    </Box>
  )
}

export default Home
