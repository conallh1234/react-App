import React, { useContext } from "react";
import PageTemplate from '../components/templateTrendingListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToFavouritesTrending from '../components/buttons/addToFavoritesTrending';

const TrendingMoviesPage = () => {
  const context = useContext(MoviesContext);
  //const favoritesTrending = context.trending.filter((m) => { return ("favorite" in m)}); //gets favorites from trending A
    var favoritesTrending = context.trending.filter((m) => { return !("favorite" in m)}); //gets all from trending except for favourites
    const favoritesDiscover = context.movies.filter((m) => { return ("favorite" in m)}); //gets favorites from discover 
//sr added
    //remove the favourites that are in the movies favourites
    favoritesTrending = favoritesTrending.filter( ( m ) => !favoritesDiscover.includes( m ) );
    const trending = context.trending;

  return (
      <PageTemplate 
        title='No. Movies'
          movies={trending} //show the trending without the favourites from trending and movies
      />
  );
};

export default TrendingMoviesPage;