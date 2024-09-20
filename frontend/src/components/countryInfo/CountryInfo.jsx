import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ApiService } from "../../services/api.js";
import BorderCountries from "./borderCountries/BorderCountries";
import Population from "../population/Population";

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const { codeName } = location.state || {};
  const countries = new ApiService("countries");

  const theme = useTheme();

  const getCountry = async () => {
    try {
      const response = await countries.getByCode(codeName?.codeName);
      setCountry(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(country);

  useEffect(() => {
    if (codeName) {
      getCountry();
    }
  }, [codeName]);

  if (!country) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.card.main,
        pt: 2,
      }}
    >
      <Box
        component="img"
        sx={{
          width: "97%",
          maxWidth: "700px",
          objectFit: "cover",
          aspectRatio: "16 / 9",
        }}
        src={country?.flag?.data?.flag || "default_image_url"}
        alt={`Flag of ${country?.country?.commonName || "Unknown Country"}`}
      />
      <Box
        sx={{
          height: "70px",
          display: "flex",
          flexDirection: "column",
          mt: 2,
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "HelveticaNowDisplay",
            letterSpacing: "1px",
            pl: 2,
          }}
        >
          {country?.country?.commonName || "Unknown Country"}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            pl: 3,
            mt: 1,
            fontFamily: "HelveticaNowDisplay",
            fontSize: "14px",
            fontWeight: "bold",
            color: theme.palette.gray.main,
          }}
        >
          {country?.country?.officialName || "Unknown"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            pl: 2,
            mt: 1,
            fontFamily: "HelveticaNowDisplay",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Region:</span> {country?.country?.region || "Unknown"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            pl: 2,
            mt: 1,
            fontFamily: "HelveticaNowDisplay",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Population:</span>{" "}
          {country?.population?.data?.populationCounts[
            country?.population?.data?.populationCounts.length - 1
          ].value.toLocaleString() || "Unknown"}
        </Typography>

        <BorderCountries borderCountries={country?.country?.borders || "Unknown"} />
      </Box>
        <Population populationData={country?.population?.data?.populationCounts || "Unknown"} />
    </Box>
  );
};

export default CountryInfo;
