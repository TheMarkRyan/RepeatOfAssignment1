import React, { useState, useEffect } from "react";
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FavoriteMoviesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    setFilteredFavorites(storedFavorites);
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);
    if (!query) {
      setFilteredFavorites(favorites);
    } else {
      const filtered = favorites.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFavorites(filtered);
    }
  };

  const moviesToShow = searchTerm ? filteredFavorites : favorites;

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <FilterMoviesCard onSearch={handleSearch} />
      </Box>
      <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Favorite Movies
        </Typography>
        <MovieList movies={moviesToShow} />
      </Box>
    </Box>
  );
};

export default FavoriteMoviesPage;