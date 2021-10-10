import express from "express";
import { getPlaceDetails, getPlaceAutoComplete } from '../controllers/places_controller.js'

const placesRouter = express.Router();

placesRouter.route('/getPlaceDetails').post(getPlaceDetails)

placesRouter.route('/getPlaceAutoComplete').post(getPlaceAutoComplete)

export default placesRouter