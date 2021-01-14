import express from 'express';
import {
  getMovies, getMovie, getMovieReviews, getUpcomingMovies, getTrendingMovies, getMovieCredits, getMovieCrew, getMovieCast, getPeople
} from '../tmdb-api';
import trendingModel from './trendingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    //getTrendingMovies()
    //.then(movies => res.status(200).send(movies).catch(next));
    trendingModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });
  

  export default router;