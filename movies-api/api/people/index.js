import express from 'express';
import {people} from '../../seedData/people';
import {
  getPerson, getPeople, getMovieCast
} from '../tmdb-api';
import personModel from './personModel'

const router = express.Router();

router.get('/', (req, res, next) => {
    //getPeople()
    //.then(people => res.status(200).send(people)).catch(next);
    personModel.find().then(people => res.status(200).send(people)).catch(next);
  });

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    getPerson(id)
    .then(person => res.status(200).send(person)).catch(next);
    //personModel.findPersonByID(id).then(person => res.status(200).send(person)).catch(next);
  });

export default router;



