import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-light ">
      <nav className="navbar-brand text-blue">
        <Link className=" text-blue" to="/">
          Movies
        </Link>
      </nav>
      <nav className="navbar-brand text-blue">
        <Link className=" text-blue" to="/people">
          People
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-dark">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link text-blue" to="/movies/trending">
              Trending
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/movies/watchlist">
              Watch List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/movies/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;