import { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import FlagCard from "../flagCard/FlagCard";
import { ApiService } from "../../services/api.js";

const FlagSection = () => {
  const [country, setCountry] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const countries = new ApiService("countries");

  const getCountries = async () => {
    try {
      const response = await countries.get();
      setCountry(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const totalPages = country.flag?.length ? Math.ceil(country.flag.length / itemsPerPage) : 0;

  const paginatedFlags = country.flag?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        mb: "20px",
      }}
    >
      {totalPages > 0 && (
        <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" sx={{ marginTop: "20px" }} />
      )}
      {paginatedFlags?.map((counFlag, index) => (
        <FlagCard key={index} titleCountry={counFlag.name} flagImg={counFlag.flag} />
      ))}

      {totalPages > 0 && (
        <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" sx={{ marginTop: "20px" }} />
      )}
    </Box>
  );
};

export default FlagSection;
