import express from "express";
import { getRating, postRating } from '../controllers/ratings_controller.js'

const ratingRouter = express.Router();

ratingRouter.route('/postRating').post(postRating)

ratingRouter.route('/getRating').get(getRating)

export default ratingRouter