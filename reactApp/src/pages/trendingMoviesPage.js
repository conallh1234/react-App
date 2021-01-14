import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import {AuthContext} from '../contexts/authContext';
import AddToFavouritesTrending from '../components/buttons/addToFavoritesTrending';

const TrendingMoviesPage = () => {
  const context = useContext(MoviesContext);
  //const favoritesTrending = context.trending.filter((m) => { return ("favorite" in m)}); //gets favorites from trending A
    var favoritesTrending = context.trending.filter((m) => { return !("favorite" in m)}); //gets all from trending except for favourites
    const favoritesDiscover = context.movies.filter((m) => { return ("favorite" in m)}); //gets favorites from discover 
//sr added
    //remove the favourites that are in the movies favourites
    favoritesTrending = favoritesTrending.filter( ( m ) => !favoritesDiscover.includes( m ) );

    console.log(AuthContext.userName);

  return (
      <PageTemplate 
        title='No. Movies'
        //movies={movies}
          movies={favoritesTrending} //show the trending without the favourites from trending and movies
          action={(movie) => {
          return <AddToFavouritesTrending movie={movie} />
        }}
      />
  );
};

export default TrendingMoviesPage;