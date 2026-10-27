import React from "react";

function GenreFilter({ genres }) {
  const handleGenreClick = (genre) => {
    console.log(`You selected the ${genre} genre`);
  };

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          className="genre-button"
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;