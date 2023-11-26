import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovies } from "../api/tmdb-api";
import MovieList from '../components/movieList';
import FilterMoviesCard from '../components/filterMoviesCard'; // This is assumed to be your filter component
import Box from '@mui/material/Box';

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <FilterMoviesCard /* pass in any props your filter component needs */ />
      </Box>
      <Box sx={{ pl: 25, width: 'calc(100% - 250px)', overflowY: 'auto' }}>
        <MovieList movies={movies} selectFavorite={props.selectFavorite} />
      </Box>
    </Box>
  );
};

export default HomePage;