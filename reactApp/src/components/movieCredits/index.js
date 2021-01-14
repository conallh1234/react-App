import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCast } from "../../api/movie-api";
;

export default ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movie.id).then(cast => {
      setCast(cast);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Character</th>
          <th scope="col">Known For</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => {
            return (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.popularity}</td>
                <td>{c.character}</td>
                <td>{c.known_for_department}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/people/${c.id}`,
                      state: {
                        person: c,
                        movie: movie
                      }
                    }}
                  >
                    View Actor Profile
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};