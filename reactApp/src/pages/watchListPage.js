import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const WatchListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  
    return ("addwatch" in m);
  });

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

export default WatchListPage;