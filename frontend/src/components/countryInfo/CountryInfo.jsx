import { useEffect, useState } from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiService } from "../../services/api.js";
import BorderCountries from "./borderCountries/BorderCountries";
import Population from "../population/Population";
import LoaderModal from "../loader/LoaderModal.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { codeName } = location.state || {};
  const countries = new ApiService("countries");

  const theme = useTheme();

  const getCountry = async () => {
    try {
      setLoading(true);
      const response = await countries.getByCode(codeName?.codeName);
      setCountry(response);
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 404) {
        navigate("/notFound");
      }
      console.log(error, "error en contrinfo");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (codeName) {
      getCountry();
    }
  }, [codeName]);

  if (!country) {
    return <LoaderModal />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.card.main,
        py: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: {
            xs: "column",
            custom: "row",
          },
          mb: "50px",
          position: "relative",
          pt: "60px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIcon />}
          sx={{
            position: "absolute",
            top: "10px",
            left: "2px",
            transition: "all 0.5s ease",
            border: `2px solid transparent`,
            "&:hover": {
              backgroundColor: theme.palette.card.main,
              color: theme.palette.primary.main,
              border: `2px solid ${theme.palette.primary.main}`,
              "& .MuiSvgIcon-root": {
                transform: "translateX(-10px)",
                transition: "all 0.5s ease",
              },
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: "HelveticaNowDisplay",
              fontWeight: "bold",
            }}
            variant="button"
          >
            Go back
          </Typography>
        </Button>
        <Box
          component="img"
          sx={{
            width: { xs: "97%", custom: "60%" },
            maxWidth: "700px",
            objectFit: "cover",
            aspectRatio: "16 / 9",
          }}
          src={country?.flag?.data?.flag || "default_image_url"}
          alt={`Flag of ${country?.country?.commonName || "Unknown Country"}`}
        />
        <Box
          sx={{
            minHeight: "70px",
            display: "flex",
            flexDirection: "column",
            mt: 2,
            flexGrow: 1,
            width: "100%",
            pb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", custom: "row" },
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
                pl: { xs: 3, custom: 1 },
                mb: { xs: 0, custom: "2px" },
                mt: 1,
                fontFamily: "HelveticaNowDisplay",
                fontSize: "14px",
                fontWeight: "bold",
                color: theme.palette.gray.main,
                alignSelf: { xs: "start", custom: "end" },
              }}
            >
              {country?.country?.officialName || "Unknown"}
            </Typography>
          </Box>

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
      </Box>

      <Population populationData={country?.population?.data?.populationCounts || "Unknown"} />
      {loading && <LoaderModal />}
    </Box>
  );
};

export default CountryInfo;
