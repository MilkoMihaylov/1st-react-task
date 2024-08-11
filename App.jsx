import React, { useState, useEffect } from 'react';
import Film from './Film';

function App() {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Films</h1>
      {films.map(film => (
        <Film key={film.episode_id} film={film} />
      ))}
    </div>
  );
}

export default App;