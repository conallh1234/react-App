import express from 'express';
import {
  getGenres
} from '../tmdb-api';

const router = express.Router();

//get genres
router.get('/', (req, res, next) => {
    //genresModel.find().then(genres => res.status(200).send(genres)).catch(next);
    getGenres()
    .then(genres => res.status(200).send(genres))
    .catch((error) => next(error));
  });


export default router;