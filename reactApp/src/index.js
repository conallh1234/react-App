//import './sample/';


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css'
//new
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./routes/privateRoute"
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
    <div className="jumbotron">
    <AuthProvider>
      <SiteHeader/> 
      <div className="container-fluid">
        <MoviesContextProvider>
          <PeopleContextProvider>
            <GenresContextProvider>
              <Switch>
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <PrivateRoute exact path="/movies/watchlist" component={WatchListPage}/>
                <PrivateRoute exact path="/movies/trending" component={TrendingMoviesPage} />
                <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <PrivateRoute path="/movies/:id" component={MoviePage} />
                <PrivateRoute path="/people/:id" component={PersonPage} />
                <PrivateRoute path="/people" component={PeoplePage} /> 
                <PrivateRoute path="/profile" component={ProfilePage} />
                <PrivateRoute path="/home" component={UserHomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </PeopleContextProvider>
        </MoviesContextProvider>
      </div>
    </AuthProvider>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));