import { Box, useTheme, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const theme = useTheme()
  return (
    <Box
        sx={{
            height: "60px",
            width: "100%",
            backgroundColor: theme.palette.card.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Typography 
            variant="h4"
            onClick={() => navigate("/")}
            sx={{
                fontFamily: "HelveticaNowDisplay",
                fontWeight: "bold",
                cursor: "pointer",
            }}
        >
            Countries Info
        </Typography>
    </Box>
  )
}

export default Header
