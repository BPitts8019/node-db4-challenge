const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./recipes/recipes-router");
const server = express();

server.use(helmet());
server.use(express.json());

//Welcome
server.get("/", (req, res, next) => {
   res.json({
      message: "Welcome to node-db4-challenge"
   });
});

server.use("/api/recipes", recipeRouter);
// server.get("/api/ingredients/:id/recipes", (req, res, next) => {});

//404 Page not found
server.use((req, res, next) => {
   res.status(404).json({
      message: "You've reached a page that doesn't exist... try a different one."
   });
});

//Catch 500 errors
server.use((error, req, res, next) => {
   console.log(error.toString());
   res.status(500).json({
      data: error.toString()
   });
});

module.exports = server;