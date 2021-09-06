import Ratings from '../models/ratings_model.js'
import asyncHandler from 'express-async-handler'

export const postRating = asyncHandler(async(req, res) => {
    try {
        console.log(req.body)
        const rating = new Ratings(req.body)
        await rating.save()
        res.status(200).send(rating)
    } catch (error) {
        res.status(400).send(error)
    }
})