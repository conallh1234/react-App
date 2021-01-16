import dotenv from 'dotenv';
import express from 'express';
//import helmet from 'hemlet';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import peopleRouter from './api/people';
import trendingRouter from './api/trending';
import upcomingRouter from './api/upcoming';
import session from 'express-session';
import passport from './authenticate';
import './db';
import {loadUsers, loadMovies, loadPeople, loadTrending, loadUpcoming} from './seedData';


dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(passport.initialize());

const port = process.env.PORT;

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadPeople();
  loadTrending();
  loadUpcoming();
}

app.use(express.static('public'));
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/people', peopleRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/trending', trendingRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

