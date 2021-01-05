import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Deathday (if Applicable)
        </li>
        <li key="rut" className="list-group-item ">
        {person.deathday}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="rut" className="list-group-item ">
          {person.biography}
        </li>
      </ul> 

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        <li key="rut" className="list-group-item ">
        {person.known_for_department}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="rut" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rut" className="list-group-item ">
        {person.popularity}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Place Of Birth
        </li>
        <li key="rut" className="list-group-item ">
        {person.place_of_birth}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pco" className="list-group-item list-group-item-dark">
          IMDB ID
        </li>
        <li key="rut" className="list-group-item ">
        {person.imdb_id}
        </li>
      </ul>
    </>
  );
};