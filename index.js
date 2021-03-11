require('dotenv').config();

console.log("web 39 rules")

const express = require('express');

const server = express();

server.use(express.json());

console.log(process.env.NODE_ENV)

// on Heroku machine, an env variable is called "NODE_ENV" -> "production"
if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  server.use(cors('dev'));
}