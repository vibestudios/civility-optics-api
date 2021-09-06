import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
const PORT = 5000;
import ratingRouter from './routes/ratings_route.js';

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/CivilityOptics', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(express.json())
app.use(ratingRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port " + PORT);
});