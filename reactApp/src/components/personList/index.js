import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({people}) => {
  const peopleCards = people.map(p => (
    <Person key={p.id} person={p} />
  ));
  return <div className="row movies">{peopleCards}</div>;
};

export default PersonList;