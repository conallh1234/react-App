import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";
import { addFavouriteTrending } from "../../api/movie-api";

const AddToFavoritesTrending = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext)

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavoritesTrending(movie.id);
    addFavouriteTrending(context2.userName, movie.id);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};




export default AddToFavoritesTrending;