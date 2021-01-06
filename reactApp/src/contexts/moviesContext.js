import React, { useState, createContext, useEffect, useReducer } from "react";
import {  getMovies, getUpcomingMovies, getTrendingMovies  } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        trending: state.trending.map((m) =>
        m.id === action.payload.movie.id ? { ...m, favorite: true} : m
        ),
      };
    case "add-favorite-trending":
      return {
        trending: state.trending.map((m) => 
          m.id === action.payload.movie.id ? { ...m, favorite: true} : m
        ),
        upcoming: [...state.upcoming],
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], trending: [...state.trending] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], trending: [...state.trending] };
    case "load-trending":
      return{ trending: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        trending: [...state.trending],
      };
    case "add-watch":
      return{
        upcoming: state.upcoming.map((m) =>
        m.id === action.payload.movie.id ? { ...m, addwatch: true } : m
      ),
       movies: [...state.movies],
       trending: [...state.trending],
      }; 
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], trending: [], });
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  
  const addToFavoritesTrending  = (movieId) => {
    const index = state.trending.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-trending", payload: { movie: state.trending[index], } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watch", payload: { movie: state.upcoming[index] } });
  };

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTrendingMovies().then((movies) => {
      dispatch({ type: "load-trending", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming : state.upcoming,
        trending: state.trending,
        addToFavorites: addToFavorites,
        addToFavoritesTrending : addToFavoritesTrending,
        addReview: addReview,
        addToWatchList: addToWatchList,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider