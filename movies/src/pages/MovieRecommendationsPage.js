import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRecommendations } from '../api/tmdb-api';
import MovieList from '../components/movieList';

const MovieRecommendationsPage = () => {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovieRecommendations(id).then(recommendations => {
      setRecommendations(recommendations);
    });
  }, [id]);

  return (
    <>
      <h2>Movie Recommendations</h2>
      <MovieList movies={recommendations} />
    </>
  );
};

export default MovieRecommendationsPage;