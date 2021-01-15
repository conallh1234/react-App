import React from "react";
import Movie from "../favouriteWatchCard/";
import "./favouritesList.css";

const MovieList = ({movies, action, remove}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} remove={remove} />
  ));
  return <div  className="row movies bg-primary">{movieCards}</div>;
};

export default MovieList;