import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovies } from "../api/tmdb-api";

const HomePage = (props) => {
  // The useQuery hook is used here to fetch movies from the API.
  // The first argument 'discover' is the unique key for this query,
  // and the second argument is the function that returns the promise that resolves to the list of movies.
  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }  

  // The results of the query (the movies) are stored in the 'data' variable.
  const movies = data.results;


  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  const addToFavorites = (movieId) => {
    // Dummy function for adding to favorites
    // This should be updated to handle adding to favorites properly
    console.log("Dummy add to favorites", movieId);
  };

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default HomePage;