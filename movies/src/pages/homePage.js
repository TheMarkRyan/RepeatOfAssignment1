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

  const { data, error, isLoading, isError } = useQuery(['discover', selectedGenre], () => getMovies(selectedGenre), {
    onSuccess: (data) => {
      setFilteredMovies(data.results);
    }
  });

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (!query) {
      setFilteredMovies(data?.results || []);
    } else {
      const results = await searchMovies(query);
      setFilteredMovies(results);
    }
  };

  const handleFilter = async (genreId) => {
    setSelectedGenre(genreId);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const moviesToShow = searchTerm ? filteredMovies : data?.results;

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <FilterMoviesCard onSearch={handleSearch} onFilter={handleFilter} />
      </Box>
      <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto' }}>
        <MovieList movies={moviesToShow} />
      </Box>
    </Box>
  );
};

export default HomePage;