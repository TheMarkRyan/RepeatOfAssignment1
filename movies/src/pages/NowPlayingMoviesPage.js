import React, { useState, useEffect } from 'react';
import { getNowPlayingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList';

const NowPlayingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNowPlayingMovies()
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
            <h2>Now Playing Movies</h2>
            <MovieList movies={movies} />
        </>
    );
};

export default NowPlayingMoviesPage;