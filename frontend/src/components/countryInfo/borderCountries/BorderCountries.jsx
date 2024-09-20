import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BorderCountries = ({ borderCountries }) => {
  const navigate = useNavigate();

  const theme = useTheme();

  const handleBorderClick = (codeName) => {
    navigate(`/countries/${codeName}`, {
      state: {
        codeName: { codeName },
      },
    });
  };

  return (
    <Box
      sx={{
        mt: "15px",
        display: "flex",
        minHeight: "180px",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          ml: "10px",
          fontFamily: "HelveticaNowDisplay",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Border Countries:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          px: "10px",
          pt: "10px",
        }}
      >
        {borderCountries?.map((country, index) => (
          <Button
            key={index}
            onClick={() => handleBorderClick(country.countryCode)}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.gray.main,
              py: "3px",
              m: "5px",
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontFamily: "HelveticaNowDisplay",
                fontWeight: "bold",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {country.commonName}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default BorderCountries;
