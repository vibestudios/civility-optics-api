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
```

To run the server to the database, use the command `mongod` anywhere in the terminal

## Running

To run the server run the command, enter the `backend` directory and run `node server.js` in the terminal

The request to post to the ratings collection is `localhost:5000/postRatings`

The syntax of the response body is `{"value":x, "tags":["", "", ...]}` where x is a number from 1 to 5, and tags is an array of strings
