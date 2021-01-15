import React from "react";
import Movie from "../movieCardTrending/";
import "./trendingList.css";

const MovieList = ({movies}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} />
  ));
  return <div  className="row movies bg-primary">{movieCards}</div>;
};

export default MovieList;