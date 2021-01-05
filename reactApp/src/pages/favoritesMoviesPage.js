import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

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
  const trendingFavorites = context.trending.filter(m => m.favorite)
  const discoverFavorites = context.movies.filter( m => m.favorite )
  const favorites = [...discoverFavorites, ...trendingFavorites]
  const displayFavorites = getUnique(favorites, 'id');


  return (
    <MovieListPageTemplate
      movies={displayFavorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;