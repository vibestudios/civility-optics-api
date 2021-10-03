import Ratings from '../models/ratings_model.js'
import asyncHandler from 'express-async-handler'

export const postRating = asyncHandler(async(req, res) => {
    try {
        console.log(req.body)
        const rating = new Ratings(req.body)
        await rating.save()


        const pipeline = [
            {
              '$match': {
                'place_id': req.body.place_id
              }
            }, {
              '$group': {
                '_id': '$place_id', 
                'avg_rating': {
                  '$avg': '$value'
                }
              }
            }
        ]
        const ratings = await Ratings.aggregate(pipeline)
        res.json(ratings)


        
        res.status(200).send(rating)
    } catch (error) {
        res.status(400).send(error)
    }
})

export const getRating = asyncHandler(async(req, res) => {
    try {
        const pipeline = [
            {
              '$match': {
                'place_id': req.body.place_id
              }
            }, {
              '$group': {
                '_id': '$place_id', 
                'avg_rating': {
                  '$avg': '$value'
                }
              }
            }
        ]
        const ratings = await Ratings.aggregate(pipeline)
        res.json(ratings)
        res.status(200).send(rating)
    } catch (error) {
        res.status(400).send(error)
    }
})