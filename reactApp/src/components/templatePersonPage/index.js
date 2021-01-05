import React from "react";
import PersonHeader from '../headerPerson'
import "./personPage.css";

const TemplatePersonPage = ({ person, children }) => {
  const mystyle = {
      backgroundColor: "White",
      padding: "10px",
      fontFamily: "Arial"
  }

  return (
    <>
      <PersonHeader person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
        <div style={mystyle} className="col-8">{children}</div>
      </div>
    </>
  );
};

export default TemplatePersonPage;