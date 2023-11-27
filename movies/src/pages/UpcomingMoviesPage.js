import React, { useState, useEffect } from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard';
import Box from '@mui/material/Box';

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getUpcomingMovies()
      .then(data => {
        setMovies(data);
        setFilteredMovies(data); // Set filteredMovies initially to all movies
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);
    if (!query) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const moviesToShow = searchTerm ? filteredMovies : movies;

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <FilterMoviesCard onSearch={handleSearch} />
      </Box>
      <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto' }}>
        <h2>Upcoming Movies</h2>
        <MovieList movies={moviesToShow} />
      </Box>
    </Box>
  );
};

export default UpcomingMoviesPage;