import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming;

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;