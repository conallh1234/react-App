import express from 'express';
import {
  getPerson, getPeople
} from '../tmdb-api';
import personModel from './movieModel'

const router = express.Router();