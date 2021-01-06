//import './sample/';


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//new
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./routes/privateRoute"
import AuthHeader from "./components/authHeader/authHeader";
import AuthProvider from "./contexts/authContext";
import UserHomePage from "./pages/userHomePage"
import ProfilePage from "./pages/profilePage";
//end of new 
import HomePage from "./pages/homePage";
import PeoplePage from "./pages/peoplePage";
import PersonPage from "./pages/personDetailsPage"
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMovies';
import WatchListPage from './pages/watchListPage';
import MoviesContextProvider from "./contexts/moviesContext";
import PeopleContextProvider from "./contexts/peopleContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className="jumbotron">
      <SiteHeader/> 
      <div className="container-fluid">
        <MoviesContextProvider>
          <PeopleContextProvider>
            <GenresContextProvider>
              <Switch>
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <PrivateRoute exact path="/movies/trending" component={TrendingMoviesPage} />
                <PrivateRoute exact path="/movies/watchlist" component={WatchListPage}/>
                <PrivateRoute path="/movies/:id" component={MoviePage} />
                <PrivateRoute path="/people/:id" component={PersonPage} />
                <PrivateRoute path="/people" component={PeoplePage} />
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute path="/movies" component={UserHomePage} /> 
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </PeopleContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));