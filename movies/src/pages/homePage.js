import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovies, searchMovies } from "../api/tmdb-api";
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard';
import Box from '@mui/material/Box';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const { data, error, isLoading, isError } = useQuery('discover', getMovies, {
    onSuccess: (data) => {
      // Set the movies to filteredMovies when the query succeeds
      setFilteredMovies(data.results);
    }
  });

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (!query) {
      // If the search term is cleared, reset to the original movies from the 'discover' query
      setFilteredMovies(data?.results || []);
    } else {
      // Search movies using the API
      const results = await searchMovies(query);
      setFilteredMovies(results);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Render the movies that match the search term or genre filter
  const moviesToShow = searchTerm ? filteredMovies : data?.results;

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <FilterMoviesCard onSearch={handleSearch} />
      </Box>
      <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto' }}>
        <MovieList movies={moviesToShow} />
      </Box>
    </Box>
  );
};

export default HomePage;