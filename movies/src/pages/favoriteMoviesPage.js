import React, { useEffect, useState } from "react";
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard'; // or your actual filter component
import Box from '@mui/material/Box';

const FavoriteMoviesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: '15%', position: 'fixed', height: 'fixed', overflowY: 'auto' }}>
        <FilterMoviesCard/>
      </Box>
      <Box sx={{ width: '75%', ml: '25%', overflowY: 'auto', pt: 3 }}>
        <MovieList movies={favorites} selectFavorite={() => {}} />
      </Box>
    </Box>
  );
};

export default FavoriteMoviesPage;