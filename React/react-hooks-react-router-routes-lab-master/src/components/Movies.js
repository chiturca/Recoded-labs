import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>
      { movies.map( movie => 
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <h4>Genres:</h4>
          <ul>
            {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
          </ul>
        </div>
      )}
    </>
  );
}

export default Movies;
