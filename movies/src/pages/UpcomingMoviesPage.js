import React, { useState, useEffect } from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getUpcomingMovies(selectedGenre) 
      .then(data => {
        setMovies(data);
        setFilteredMovies(data); 
      })
      .catch(error => {
        setError(error);
      });
  }, [selectedGenre]); 

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

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
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
            <FilterMoviesCard onSearch={handleSearch} onFilter={handleGenreChange} />
        </Box>
        <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto', textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                Upcoming Movies
            </Typography>
            <MovieList movies={moviesToShow} />
        </Box>
    </Box>
  );
};

export default UpcomingMoviesPage;