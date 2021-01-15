import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";
import { removeFromFavourites } from "../../api/movie-api";

const RemoveFromFavourites = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext)

  const handleRemoveFromFavorite = e => {
    e.preventDefault();
    removeFromFavourites(context2.userName, movie.id)
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromFavorite}
    >
      Remove from Favourites
    </button>
  );
};




export default RemoveFromFavourites;