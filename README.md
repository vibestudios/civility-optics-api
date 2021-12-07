# civility-optics-api
The API connector to communicate the app with the database.

# Release Notes
v 1.0.0, build 1

## Features
- Post user-submitted ratings for a certain venue to our database.
- Get user-submitted ratings for a certain venue from our database.
- Get comments from users about a vertain venur from our database.
- Create user accounts, login users, and logout users from our system.
- Leverage Google Places API to return a list of nearby venues based on a user's input
- Leverage Google Places API to return specific info about a venue.

## Known Issues
- Some requests are formatted as POST but should really be GET.
- In getRatings, ratings from the last 30 days should be returned, but all ratings are being returned.
- In getReviews, null reviews aren't bring filtered out.

# Installation Guide


## Pre-requisites
Make sure you have Node.js version 14.16 and NPM version 6.14 installed: https://nodejs.org/en/download/. You can follow the tutorial provided here: https://phoenixnap.com/kb/install-node-js-npm-on-windows.

To access the project on your local computer, clone the repository on GitHub by running `git clone https://github.com/vibestudios/civility-optics-android.git`.

<br>

If you want to run the backend locally, you must create a `.env` folder in the `backend` directory and define the following environment variables:
```
GOOGLE_MAPS_API_KEY="<GOOGLE PLACES API KEY>"
JWT_KEY="<ANY STRING OF YOUR CHOICE>"
PORT="<PORT NUMBER (5000 for Windows, 5001 for MAC)>"
```
<br>
Install the required packages by running the following commands in the terminal:

```
npm install express
npm install express-async-handler
npm install mongoose
npm install cors
npm install dotenv
npm install mongodb
npm install axios
npm install validator
npm install bcryptjs
npm install jsonwebtoken
npm install nodemailer
```
## Running

To start the backend service locally, enter the `civility-optics-api/backend` directory and run the command `node server.js` in the terminal.

To run the server to the database, use the command `mongod` anywhere in the terminal.

# Endpoint Details

## /postRatings

The request to post to the ratings collection is `localhost:5000/postRatings` (POST)

The syntax of the response body is `{"value":x, "tags":["", "", ...], "place_id": "<id>", "date_visited: "<date>", "review:" "<review>"}` where x is a number from 1 to 5, tags is an array of strings, id is a string signifying the business's ID, date is the date the user selected to post the rating, and review is a user-inputted string of their review.
In order to proprely post a rating, the backend makes sure that the user is authorized. You must include a header in the request called `Authorization` with the value `Bearer <token>`, where `token` is a JSON Web Token retrieved when a user logs in. More details later.

## /getRatings

The request to get the ratings for a specifited business is `localhost:5000/getRatings` (POST)

The syntax of the response body is `{"place_id": "<id>"}` where id is a string signifying the business's ID. Returns a JSON with the `_id` tag being the place_id and the `avg_rating` tag being the average rating for that business.

## /getReviews

The request to get the reviews for a specifited business is `localhost:5000/getReviews` (POST)

The syntax of the response body is `{"place_id": "<id>", "limit":x}` where id is a string signifying the business's ID, and x is a number signifying the max number of reviews you want returned. Returns a JSON with the `review` field being the review and the `date_visited` field being the date the reviewer visited the business, sorted by most recent to least recent.

## /users

The request to create a new user is `localhost:5000/users` (POST). The request body takes the form `{"email":"<email>", "password":"<password>"}`, where email, and password are all Strings.

This request will return a JSON with the newly created user along with a field called `token`, the value in the `token` field must be passed into the `/users/me`, `/users/me/logout`, and `/users/me/logoutall` requests as a header in order for the backend to know what user to get, so be sure to not lose it!

## /users/login

The request to login a user is `localhost:5000/users/login` (POST). The request body takes the form `{"email":"<email>", "password":"<password>"}`, where email, and password are all Strings.

This request will return a JSON with the logged-in user along with a field called `token`, the value in the `token` field must be passed into the `/users/me`, `/users/me/logout`, and `/users/me/logoutall` requests as a header in order for the backend to know what user to get, so be sure to not lose it!.

## /users/me

The request to retrieve the user profile of an already logged in user is `localhost:5000/users/me` (GET).
In order to proprely retrieve the user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.

## /users/me/logout

The request to logout the user on their current device is `localhost:5000/users/me/logout` (GET).
In order to proprely logout the  user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.

## /users/me/logoutall

The request to logout the user on all devices is `localhost:5000/users/me/logoutall` (GET).
In order to proprely logout the user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.

## /getPlaceAutoComplete

The request to get the list of nearby businesses within a 5 mile radius is `localhost:5000/getPlaceAutoComplete` (POST). The request body takes the form `{"input":"<input>", "sessiontoken":"<sessiontoken>", "latitude":"<latitude>", "longitude":"<longitude>"}`, where input is a string signifying the user's input for the business, sessiontoken is the sessiontoken generated when the user starts typing in the input, latitude is the latitude portion of the user's location taken from their phone, and longitude is the longitude verion of the user's location taken from their phone.

This request will return a JSON of the nearby businesses whose names include the user's input. A sample JSON result can be seen in the  `civility-optics-api/backend/sample_responses` folder:

## /getPlaceDetails

The request to get the details of a certain place from the Google Places is `localhost:5000/getPlacesDetails` (POST). The request body takes the form `{"place_id":"<id>", "sessiontoken":"<sessiontoken>"}`, where id corresponds to the place_id from the Google Places API, and sessiontoken is the sessiontoken generated when the user starts typing in the input in the searchbar.

This request will return a JSON of the business with specific information about the business, such as location, address, and a photo. A sample JSON result can be seen in the  `civility-optics-api/backend/sample_responses`

