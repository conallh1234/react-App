import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {addWatch} from "../../api/movie-api";
import { AuthContext } from "../../contexts/authContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext)

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
    addWatch(context2.userName, movie.id)
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton;