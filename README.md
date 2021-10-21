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
```

To run the server to the database, use the command `mongod` anywhere in the terminal

## Running

To run the server run the command, enter the `backend` directory and run `node server.js` in the terminal

The request to post to the ratings collection is `localhost:5000/postRatings`

The syntax of the response body is `{"value":x, "tags":["", "", ...], "place_id": "<id>", "date_visited: "<date>", "review:" "<review>"}` where x is a number from 1 to 5, tags is an array of strings, id is a string signifying the business's ID, date is the date the user selected to post the rating, and review is a user-inputted string of their review.


The request to get the ratings for a specifited business is `localhost:5000/getRatings`

The syntax of the response body is `{"place_id": "<id>"}` where x place_id is a string signifying the business's ID. Returns a JSON with the `_id` tag being the place_id and the `avg_rating` tag being the average rating for that business.

The request to get the reviews for a specifited business is `localhost:5000/getReviews`

The syntax of the response body is `{"place_id": "<id>", "limit":x}` where place_id is a string signifying the business's ID, and x is a number signifying the max number of reviews you want returned. Returns a JSON with the `review` field being the review and the `date_visited` field being the date the reviewer visited the business, sorted by most recent to least recent.
