# Assignment 2 - Movies API app.

Name: Conall Heffernan

## Features.

### Welcome Page
 + A user cannot access the website if they do not have an account.
 + Log in Button for returning users.
 + Sign Up functionality for new users.

### Logged In Core Functionality
 #### Movies Functionality
 + Home Page Movies - Displays a list of movies which a user can add to their favourites.
 + Trending Movies - Displays trending movies from an API fetch.
 + Upcoming Movies - Displays Upcoming movies from an API fetch which a user can add to their Watch later list.
 #### People Functionality
 + People = Displays a list of popular actors with their popularity rating.
 + People Filter = Allows user to filter actors by name.
 #### Favourites Functionality
 + Users can view, add and remove Movies in their favourites with the help of API get, post and delete methods.
 #### Watch Later Functionality
 + Users can view, add and remove Movies in their watch later list with the help of API get, post and delete methods.

## API Data Model.
 ### !!! API DATA MODEL ALSO OUTLINED IN MOVIES-API .JSON FILES USING SWAGGER !!!
 ### GET requests
 + GET https://localhost:8080/api/genres - returns a list of genres. 
 + GET https://localhost:8080/api/movies - get a list of movies.
 + GET https://localhost:8080/api/movies/:id - returns a movie with a specific ID.
 + GET https://localhost:8080/api/movies/:id/reviews - returns a list of reviews for a movie.
 + GET https://localhost:8080/api/movies/crew - returns the crew for a movie.
 + GET https://localhost:8080/api/movies/cast - returns the cast for a movie.
 + GET https://localhost:8080/api/people - returns a list of popular people.
 + GET https://localhost:8080/api/people/:id - returns a specfic person by ID.
 + GET https://localhost:8080/api/trending - returns a list of trending movies.
 + GET https://localhost:8080/api/upcoming - returns a list of upcoming movies.
 + GET https://localhost:8080/api/users - returns a list of the users present on the website.
 + GET https://localhost:8080/api/:userName/watchlist - returns the watch list object ID's for a user.
 + GET https://localhost:8080/api/:userName/favourites - returns the favourites list for a user.
 ### POST 
 + POST https://localhost:8080/api/users - add a new user to the system
 + POST https://localhost:8080/api/users/:userName/favourites - add a new favourite to a user account.
 + POST https://localhost:8080/api/users/:userName/watchlist - add a new watch later movie to a user account.
 ### DELETE
 + DELETE https://localhost:8080/api/users/:userName/favourites - deletes a favourite from the selected users accounts.
 + DELETE https://localhost:8080/api/users/:userName/watchlist - deletes a watch list item from a users.
 
### UI Design.
 + Displaying Elements of the User Interface
#### Movie Details Page
![][movieDetails]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews. Clicking 'Show Cast' will display the cast of the movie along with a link to their profile.
#### Movie Review Page
![][review]
>Shows the full text for a movie review. 
#### People Page
![][peoplePage]
>Displays a list of popular actors along with their popularity rating.
#### Login Page
![][loginPage]
>Log in page for existing Users.
#### Sign Up Page
![][signUpPage]
>Sign Up page for new users.
#### User Favourites Page
![][favouritesPage]
>Favourites page unique to each user, from here user can add review. Watch List Page works in a similar fashion. 


## Routing.
+ PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage}  - route to submit review form
+ PrivateRoute path="/reviews/:id" component={MovieReviewPage}  - route to reviews for a movie
+ PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} - route to logged in users favourites
+ PrivateRoute exact path="/movies/watchlist" component={WatchListPage} - route to logged in user's watch list
+ PrivateRoute exact path="/movies/trending" component={TrendingMoviesPage}  - route to trending movies page
+ PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage}  - route to upcoming movies page
+ PrivateRoute path="/movies/:id" component={MoviePage}  - route to a movie details page for movie with the id ':id'
+ PrivateRoute path="/people/:id" component={PersonPage}  - route to a person details page for the person with the id ':id'
+ PrivateRoute path="/people" component={PeoplePage}  - route to popular people page
+ PrivateRoute path="/home" component={UserHomePage}  - route to users home page
+ Route exact path="/login" component={LoginPage}  - route to login page
+ Route path="/signup" component={SignUpPage} - route to sign up page
+ Route path="/" component={HomePage}  - route to welcome page

### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.
> Clicking a persons card will open their details page in a new tab

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][homePageLink]
>If there is a website associated with an actor clicking the house icon beside their name will open said website in a new tab
>In a similar fashion on the movie details page there is also a house icon which will bring the user to the home page for that movies production company in a new tab

![][actorLink]
>On the movie details page when the cast is being displayed a user can click on 'view actor page' where they are brought to the details page for that actor



---------------------------------

[cardLink]: ./public/cardLink.png
[movieDetails]: ./public/movieDetails.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[homePageLink]: ./public/homePageLink.png
[actorLink]: ./public/actorLink.png
[peoplePage]: ./public/peoplePage.png
[personPage]: ./public/personPage.png
[loginPage]: ./public/loginPage.png
[signUpPage]: ./public/signUpPage.png
[favouritesPage]: ./public/favouritesPage.png