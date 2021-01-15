import React, { useContext, useState } from "react";
import PageTemplate from '../components/templateWatchListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';
import RemoveFromWatchList from '../components/buttons/removeFromWatch';
import { removeFromWatchList } from "../api/movie-api";
import { AuthContext } from "../contexts/authContext";

const WatchListPage = () => {
  const context = useContext(AuthContext);
  const [watchlist, setWatch] = useState([]);

  if(context.isAuthenticated){
    var userWatch = async() => {
      let watchListMovies = await context.getUserWatchLater(context.userName);
      return watchListMovies;
    }
    userWatch().then( userWatch => setWatch( userWatch))

    return (
      <PageTemplate
        title="No. Movies"
        movies={watchlist}  
        action={(movie) => {return <AddToWatchListButton movie={movie} />;}}
        remove={(movie) => {return <RemoveFromWatchList movie={movie} />; }}
      />
    );
  }
};

export default WatchListPage;