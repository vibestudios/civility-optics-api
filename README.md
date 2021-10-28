# civility-optics-api
The API connector to communicate the app with the database

## Setup

Make sure you have Node.js and NPM installed: https://nodejs.org/en/download/. Tutorial: https://phoenixnap.com/kb/install-node-js-npm-on-windows

Clone the repo

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

To run the server to the database, use the command `mongod` anywhere in the terminal

## Running

To run the server run the command, enter the `backend` directory and run `node server.js` in the terminal


The request to post to the ratings collection is `localhost:5000/postRatings` (POST)

The syntax of the response body is `{"value":x, "tags":["", "", ...], "place_id": "<id>", "date_visited: "<date>", "review:" "<review>"}` where x is a number from 1 to 5, tags is an array of strings, id is a string signifying the business's ID, date is the date the user selected to post the rating, and review is a user-inputted string of their review.
In order to proprely post a rating, the backend makes sure that the user is authorized. You must include a header in the request called `Authorization` with the value `Bearer <token>`, where `token` is a JSON Web Token retrieved when a user logs in. More details later.


The request to get the ratings for a specifited business is `localhost:5000/getRatings` (POST)

The syntax of the response body is `{"place_id": "<id>"}` where x place_id is a string signifying the business's ID. Returns a JSON with the `_id` tag being the place_id and the `avg_rating` tag being the average rating for that business.


The request to get the reviews for a specifited business is `localhost:5000/getReviews` (POST)

The syntax of the response body is `{"place_id": "<id>", "limit":x}` where place_id is a string signifying the business's ID, and x is a number signifying the max number of reviews you want returned. Returns a JSON with the `review` field being the review and the `date_visited` field being the date the reviewer visited the business, sorted by most recent to least recent.


The request to create a new user is `localhost:5000/users` (POST). The request body takes the form `{"email":"<email>", "password":"<password>"}`, where email, and password are all Strings.

This request will return a JSON with the newly created user along with a field called `token`, the value in the `token` field must be passed into the `/users/me`, `/users/me/logout`, and `/users/me/logoutall` requests as a header in order for the backend to know what user to get, so be sure to not lose it!


The request to login a user is `localhost:5000/users/login`. (POST) The request body takes the form `{"email":"<email>", "password":"<password>"}`, where email, and password are all Strings.

This request will return a JSON with the logged-in user along with a field called `token`, the value in the `token` field must be passed into the `/users/me`, `/users/me/logout`, and `/users/me/logoutall` requests as a header in order for the backend to know what user to get, so be sure to not lose it!.


The request to retrieve the user profile of an already logged in user is `localhost:5000/users/me` (GET).
In order to proprely retrieve the user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.


he request to logout the user on their current device is `localhost:5000/users/me/logout` (GET).
In order to proprely logout the  user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.


he request to logout the user on all devices is `localhost:5000/users/me/logoutall` (GET).
In order to proprely logout the user, you must include a header in the request called `Authorization` with the value `Bearer <token>`, where token is the aformentioned `token`.