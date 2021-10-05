import express from "express";
import { getPlaceDetails, getPlaceAutoComplete } from '../controllers/places_controller.js'

const placesRouter = express.Router();

placesRouter.route('/getPlaceDetails').get(getPlaceDetails)

placesRouter.route('/getPlaceAutoComplete').get(getPlaceAutoComplete)

export default placesRouter