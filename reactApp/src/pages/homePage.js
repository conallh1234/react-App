import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  
    return !("favorite" in m);
  });


  return (
      <PageTemplate 
        title='No Movies Yet, Log In to View'
        movies={null}
      />
  );
};

export default MovieListPage;