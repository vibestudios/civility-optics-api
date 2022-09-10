import express from "express";
import auth from '../controllers/auth_controller.js'

import { getRating, postRating, getReviews } from '../controllers/ratings_controller.js'

const ratingRouter = express.Router();

ratingRouter.route('/postRating').post(postRating)

ratingRouter.route('/getRating').post(getRating)

ratingRouter.route('/getReviews').post(getReviews)

export default ratingRouter