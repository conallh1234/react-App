import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";
import { addFavourite, getFavourites } from "../../api/movie-api";

const AddToFavoritesButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
    addFavourite(context2.userName, movie.id);
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




export default AddToFavoritesButton;