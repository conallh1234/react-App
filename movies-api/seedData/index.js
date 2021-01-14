import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import personModel from '../api/people/personModel';
import trendingModel from '../api/trending/trendingModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import {movies} from './movies.js';
import {people} from './people.js';
import {trending} from './trending.js';
import {upcoming} from './upcoming.js';


const users = [
  {
    'username': 'user1',
    'password': 'test1',
    'favourites': [],
  },
  {
    'username': 'user2',
    'password': 'test2',
    'favourites': [],
  },
  {
    'username': 'user3',
    'password': 'test3',
    'favourites': [],
  }
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTrending() {
  console.log('load trending data');
  console.log(trending.length);
  try {
    await trendingModel.deleteMany();
    await trendingModel.collection.insertMany(trending);
    console.info(`${trending.length} Trending were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load upcoming data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadPeople() {
  console.log('load people Data');
  console.log(people.length);
  try {
    await personModel.deleteMany();
    await personModel.collection.insertMany(people);
    console.info(`${people.length} People sucessfully stored.`);
  } catch (err) {
    console.error(`failed to load people data: ${err}`);
  }
}