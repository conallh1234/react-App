import express, { query } from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import movieModel from'../movies/movieModel';
import {getMovie} from '../tmdb-api';
import { trending } from '../../seedData/trending';
import trendingModel from '../trending/trendingModel';
import upcomingModel from '../upcoming/upcomingModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res, next) => {
    User.find().then(users =>  res.status(200).json(users)).catch(next);
});


//get user watchlist
router.get('/:userName/watchlist', (req, res, next) => {
  const userName = req.params.userName;
  User.findByUserName(userName).populate('watchlist').then(
    user => res.status(201).json(user.watchlist)
  ).catch(next);
});

//get user favorites
router.get('/:userName/favourites', (req, res, next) => {
  const userName = req.params.userName;
  if(User.findByUserName(userName) == null){
    res.status(401).json({
      success: false,
      msg: 'User ID is invalid.',
    });
  }
  else{
  User.findByUserName(userName).populate('favourites').then(
    user => res.status(201).json(user.favourites)
  ).catch(next);
  }
});

//delete a movie from a users favourites
router.delete('/:userName/favourites', async (req, res, next) => {
  const userName = req.params.userName;
  const id = req.body.id;
  const user = await User.findByUserName( userName );
  const movie = await movieModel.findByMovieDBId( id );

  if(user == false){
    res.status(401).json({
      success: false,
      msg: 'User ID is invalid.',
    });
  }

  if(!user.favourites.includes(movie._id) == true){
    res.status(401).json({
      success: false,
      msg: 'Movie is not in favourites',
    });
  }
  else{
  await user.favourites.pull({_id: movie._id});
  await user.save();
  res.status(201).json(user);
  }
});

//delete a movie from a users watchlist
router.delete('/:userName/watchlist', async (req, res, next) => {
  const userName = req.params.userName;
  const id = req.body.id;
  const user = await User.findByUserName( userName );
  const movie = await upcomingModel.findByMovieDBId( id );

  if(user == false){
    res.status(401).json({
      success: false,
      msg: 'User ID is invalid.',
    });
  }

  if(!user.watchlist.includes(movie._id) == true){
    res.status(401).json({
      success: false,
      msg: 'Movie is not in watchlist',
    });
  }
  else{
  await user.watchlist.pull({_id: movie._id});
  await user.save();
  res.status(201).json(user);
  }
});


// register
router.post('/', async (req, res, next) => {
  const passwordPattern = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$");
  if (!req.body.username || !req.body.password) {
    res.status(401).json({
      success: false,
      msg: 'Please pass username and password.',
    });
  }
 if (passwordPattern.test(req.body.password) == true){
   res.status(401).json({
     success: false,
     msg: 'Please provide a stronger password.',
   })
 }
  if (req.query.action === 'register') {
    await User.create(req.body).catch(next);
    res.status(201).json({
      code: 201,
      msg: 'Successful created new user.',
    });
  } else {
    const user = await User.findByUserName(req.body.username).catch(next);
      if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.username, process.env.SECRET);
          // return the information including token as JSON
          res.status(200).json({
            success: true,
            token: 'BEARER ' + token,
          });
        } else {
          res.status(401).json({
            code: 401,
            msg: 'Authentication failed. Wrong password.'
          });
        }
      });
    }
});


//Add a favourite to user account.
router.post('/:userName/favourites', async (req, res, next) => {
  const newFavourite = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(newFavourite).catch(next);
  const user = await User.findByUserName(userName).catch(next);

  //no user matching in users db
  if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });

  //Only valid ID works i.e id exists in MovieDB
  if(movie == null || newFavourite == null){
    res.status(401).json({
      success: false,
      msg: 'Please provide valid ID. ' + newFavourite + ' is not a valid movie ID.',
    });
  }

  //Avoid duplicates in favourites, if _id already exists in array dont add again
  else if(user.favourites.includes(movie._id)){
    res.status(401).json({
      success : false,
      msg: 'Movie already in favorites'
    })
  }

  //If error checking passed then update favourites
  else {
    await user.favourites.push(movie._id);
    await user.save(); 
    res.status(201).json(user);
  }
  }
);


//Add a watchlist item to user account.
router.post('/:userName/watchlist', async (req, res, next) => {
  const newWatch = req.body.id;
  const userName = req.params.userName;
  const movie = await upcomingModel.findByMovieDBId(newWatch).catch(next);
  const user = await User.findByUserName(userName).catch(next);

  //no user matching in users db
  if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });

  //Only valid ID works i.e id exists in MovieDB
  if(movie == null || newWatch == null){
    res.status(401).json({
      success: false,
      msg: 'Please provide valid ID. ' + newWatch + ' is not a valid movie ID.',
    });
  }

    //Avoid duplicates in watchlist, if _id already exists in array dont add again
  else if(user.watchlist.includes(movie._id)){
    res.status(401).json({
      success : false,
      msg: 'Movie already in watchlist'
    })
  }

  //If error checking passed then update watchlist
  else {
    await user.watchlist.push(movie._id);
    await user.save(); 
    res.status(201).json(user);
  }
  }
);

// Update a user
router.put('/:id',  (req, res, next) => {
    if (req.body._id) delete req.body._id;
     User.update({
      _id: req.params.id,
    }, req.body, {
      upsert: false,
    })
    .then(user => res.json(200, user)).catch(next);
});



export default router;