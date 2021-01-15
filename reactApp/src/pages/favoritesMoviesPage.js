import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateFavouritesListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { getFavourites } from '../api/movie-api';
import { AuthContext } from "../contexts/authContext";
import RemoveFromFavourites from "../components/buttons/removeFromFavourites";

function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique =  arr.map(e => e[comp])
      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e]).map(e => arr[e]);
  return unique;
}

const FavoriteMoviesPage = () => {
  //const context = useContext(MoviesContext);
  // const trendingFavorites = context.trending.filter(m => m.favorite)
  // const discoverFavorites = context.movies.filter( m => m.favorite )
  //const favorites = [...discoverFavorites, ...trendingFavorites]
  //const userFavourites = context.getUserFavourites(userName);
  //console.log(userFavourites);
  const context = useContext( AuthContext );
  const [favourites, setFavourites ] = useState([]);

  if (context.isAuthenticated) {
    var userFav = async() => {
      let favouriteMovies = await context.getUserFavourites(context.userName);
      return favouriteMovies;
    }
    userFav().then( userFavourites => setFavourites( userFavourites ))
  
  return (
      <MovieListPageTemplate
        movies={favourites}
        title={"Favourite Movies"}
        action={movie => <AddReviewButton movie={movie} />}
        remove={movie => <RemoveFromFavourites movie={movie} />}
      />
  );
  };
}

export default FavoriteMoviesPage;