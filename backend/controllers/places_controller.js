import asyncHandler from 'express-async-handler'
import axios from 'axios'

export const getPlaceDetails = asyncHandler(async(req, res) => {

    if (req.body.place_id === null || req.body.sessiontoken === null) {
        res.status(400).send(error);
        return;
    }
    var config = {
        method: 'get',
        baseURL: 'https://maps.googleapis.com/maps/api/place/details/json',
        headers: { },
        params: {
        place_id: req.body.place_id,
        fields: 'name,place_id,photo,formatted_address,geometry',
        sessiontoken: req.body.sessiontoken,
        key: process.env.GOOGLE_MAPS_API_KEY
        },
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
    })
    .catch(function (error) {
        console.log(error);
        res.status(400).send(error);
    });
})

export const getPlaceAutoComplete = asyncHandler(async(req, res) => {

    if (req.body.input === null 
      || req.body.sessiontoken === null 
      || req.body.latitude === null 
      || req.body.longitude === null) {
        res.status(400).send(error);
        return;
    }
  
    var config = {
        method: 'get',
        baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
        headers: { },
        params: {
          input: req.body.input,
          types: 'establishment',
          location: req.body.latitude + '%2C' + req.body.longitude,
          radius: 8000,
          key: process.env.GOOGLE_MAPS_API_KEY
        }
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
    })
    .catch(function (error) {
        console.log(error);
        res.status(400).send(error);
    });
})