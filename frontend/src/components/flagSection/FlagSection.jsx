import { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import FlagCard from "../flagCard/FlagCard";
import { ApiService } from "../../services/api.js";
import LoaderModal from "../loader/LoaderModal.jsx";

const FlagSection = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const countries = new ApiService("countries");

  const getCountries = async () => {
    try {
      setLoading(true);
      const response = await countries.get();
      setCountry(response);
    } catch (error) {
      console.log(error);
      setCountry(null);
      setLoading(false);
    } finally {
      setLoading(false);
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
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {paginatedFlags?.map((counFlag, index) => (
          <FlagCard key={index} titleCountry={counFlag.name} flagImg={counFlag.flag} codeName={counFlag.iso2} />
        ))}
      </Box>

      {totalPages > 0 && (
        <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" sx={{ marginTop: "20px" }} />
      )}

      {loading && <LoaderModal />}
    </Box>
  );
};

export default FlagSection;
