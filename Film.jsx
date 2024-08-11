import React, { useState } from 'react';

function Film({ film, characters }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h2>{film.title}</h2>
      <p>Episode: {film.episode_id}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release Date: {film.release_date}</p>
          <p>Opening Crawl: {film.opening_crawl}</p>
          <p>Characters: {film.characters}</p>
        </div>
      )}
    </div>
  );
}

export default Film;
