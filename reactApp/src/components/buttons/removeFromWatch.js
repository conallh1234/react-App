import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";
import { removeFromWatchList } from "../../api/movie-api";

const RemoveFromWatchList = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext)

  const handleRemoveFromWatch = e => {
    e.preventDefault();
    removeFromWatchList(context2.userName, movie.id)
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromWatch}
    >
      Remove from Watch List
    </button>
  );
};




export default RemoveFromWatchList;