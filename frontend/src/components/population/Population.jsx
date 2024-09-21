import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Population = ({ populationData }) => {
  const chartData = {
    labels: populationData.map((data) => data.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((data) => data.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "block",
        flexDirection: "column",
        justifyContent: "center",
        width: "97%",
        maxWidth: "700px",
      }}
    >
      <Typography variant="h6" sx={{ fontFamily: "HelveticaNowDisplay" }}>
        Population Over Time
      </Typography>
      <Line data={chartData} />
    </Box>
  );
};

export default Population;
