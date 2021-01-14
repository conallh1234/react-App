import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const SiteHeader = (props) => {
  const context = useContext(AuthContext);




  return context.isAuthenticated ? (
    <nav className="navbar  navbar-light fixed-top  bg-light ">
      <nav className="navbar-brand text-blue">
        <Link className=" text-blue" to="/home">
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
      <nav className="navbar-brand text-blue">
        <button onClick={() => context.signout()}>Sign out</button>
      </nav>
      <span className="navbar-text text-dark">
        Hello {context.userName}! Welcome To your Movie API Account.
      </span>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/home">
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
  ) : (
    <nav className="navbar  navbar-light fixed-top  bg-light ">
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "video"]}
        size="3x"
      />
      <ul>
      <li>
      <nav className="navbar-brand text-blue">
        <Link className="nav-link text-green" to="/login">Login</Link>
      </nav>
      </li>
      </ul>
      <span className="navbar-text text-dark">
        Please Create an account or Log in to Continue 
      </span>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
      />
    </nav>
  );
};

export default withRouter(SiteHeader);