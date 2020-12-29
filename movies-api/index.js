import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import session from 'express-session';
import authenticate from './authenticate';
import './db';
import {loadUsers} from './seedData'


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

const port = process.env.PORT;



app.use(express.static('public'));
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use('/api/movies', authenticate, moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter)
app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.SEED_DB) {
  loadUsers();
}