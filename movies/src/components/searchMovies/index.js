import React, { useState, useEffect } from 'react';
import { getGenres } from "../api/tmdb-api";


const SearchMovies = ({ setSearchedMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    getGenres().then(data => {
      setGenres(data.genres);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false&with_genres=${selectedGenre}`
      );
      const data = await response.json();
      setSearchedMovies(data.results);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies"
        />
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovies;