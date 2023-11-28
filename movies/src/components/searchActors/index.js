import React, { useState } from 'react';
import { searchActor, getMoviesByActor } from '../api/tmdb-api';

const SearchActors = () => {
  const [actorName, setActorName] = useState('');
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [actorMovies, setActorMovies] = useState([]);

  const handleActorSearch = async () => {
    try {
      const results = await searchActor(actorName);
      setActors(results);
    } catch (error) {
      console.error('Error searching for actors:', error);
    }
  };

  const handleActorSelection = async (actorId) => {
    setSelectedActor(actorId);
    try {
      const movies = await getMoviesByActor(actorId);
      setActorMovies(movies);
    } catch (error) {
      console.error('Error fetching actor movies:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an actor..."
        value={actorName}
        onChange={(e) => setActorName(e.target.value)}
      />
      <button onClick={handleActorSearch}>Search</button>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id} onClick={() => handleActorSelection(actor.id)}>
            {actor.name}
          </li>
        ))}
      </ul>
      {selectedActor && (
        <div>
          <h2>Selected Actor: {actors.find((actor) => actor.id === selectedActor).name}</h2>
          <h3>Movies by {actors.find((actor) => actor.id === selectedActor).name}:</h3>
          <ul>
            {actorMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchActors;