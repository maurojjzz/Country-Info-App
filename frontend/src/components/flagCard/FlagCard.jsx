import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const FlagCard = ({ titleCountry, flagImg, codeName }) => {

    const navigate = useNavigate();

    const handleFlagClick = () => {
        navigate(`/countries/${codeName}`, {
          state: {
            codeName: { codeName},
          },
        });
      };

  return (
    <Card
    onClick={() => handleFlagClick()}
      sx={{
        maxWidth: 345,
        width: "90%",
        borderRadius: "10px",
        boxShadow: "none",
        border: "none",
        cursor: "pointer",
        transition: "all 0.5s ease",
        "&:hover": {
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: "160px",
        }}
        image={flagImg}
        title={`flag from ${titleCountry}`}
      />
      <CardContent
        sx={{
          height: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontFamily={"HelveticaNowDisplay"} fontWeight={"bold"}>
          {titleCountry}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlagCard;
