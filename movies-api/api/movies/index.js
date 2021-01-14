import express from 'express';
import { movies } from '../../seedData/movies';
import {
  getMovies, getMovie, getMovieReviews, getUpcomingMovies, getTrendingMovies, getMovieCredits, getMovieCrew, getMovieCast, getPeople
} from '../tmdb-api';
import movieModel from './movieModel'

const router = express.Router();

router.get('/', (req, res, next) => {
  //getMovies()
  //.then(movies => res.status(200).send(movies)).catch(next);
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  //getMovie()!!
  getMovie(id)
  .then(movie => res.status(200).send(movie)).catch(next);
  //movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieCredits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
});

router.get('/:id/cast', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieCast(id)
  .then(cast => res.status(200).send(cast))
  .catch((error) => next(error));
});

router.get('/:id/crew', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieCrew(id)
  .then(crew => res.status(200).send(crew))
  .catch((error) => next(error));
});



export default router;