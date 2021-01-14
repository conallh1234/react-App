import express from 'express';
import { getUpcomingMovies } from '../tmdb-api';
import upcomingModel from './upcomingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    //getUpcomingMovies()
    //.then(movies => res.status(200).send(movies).catch(next));
    upcomingModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;