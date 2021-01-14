import React, { useState, useEffect, createContext, useReducer } from "react";
import { getPeople } from "../api/movie-api";
//import { getMovies, getUpcomingMovies, getTrendingMovies  } from "../api/movie-api";
//import { getPeople  } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { people: action.payload.people};
    default:
      return state;
  }
};

const PeopleContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { people: [], });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getPeople().then(people => {
      console.log(people);
      dispatch({ type: "load", payload: { people }});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        setAuthenticated
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;