import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList';

const TrendingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (movies.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h2>Trending Movies</h2>
            <MovieList movies={movies} />
        </>
    );
};

export default TrendingMoviesPage;