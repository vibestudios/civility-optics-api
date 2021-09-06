import express from "express";
import { postRating } from '../controllers/ratings_controller.js'

const ratingRouter = express.Router();

ratingRouter.route('/postRating').post(postRating)

export default ratingRouter