import React, { useContext, useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import {getUserFavourites} from '../api/movie-api';
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { AuthContext } from "../contexts/authContext";

function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique =  arr.map(e => e[comp])
      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e]).map(e => arr[e]);
  return unique;
}

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext);
  const movies = context.movies;

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;