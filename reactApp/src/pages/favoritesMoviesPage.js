import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { getFavourites } from '../api/movie-api';
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

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext);
  const trendingFavorites = context.trending.filter(m => m.favorite)
  const discoverFavorites = context.movies.filter( m => m.favorite )
  const favorites = [...discoverFavorites, ...trendingFavorites]
  const userFavourites = getFavourites(context2.userName);
  var myFavourites = [];
  const displayFavorites = userFavourites; //getUnique(favorites, 'id');
  userFavourites.then(function(result) {
    return console.log(result);
  });
  //console.log(userFavourites);


  return (
    <MovieListPageTemplate
      movies={userFavourites}
      title={"Favourite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;