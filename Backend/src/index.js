import dotenv from "dotenv";
dotenv.config({ path: ".env" });
console.log("Secret for JWT: ", process.env.JWT_SECRET);

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "../config/config";
import rooms from "./routes/rooms";
import auth from "./routes/auth";
import movies from "./routes/movies";
import seanses from "./routes/seanses";
// Connect to database
import dbConfig from "../config/database";
import mongoose from "mongoose";

mongoose.connect(dbConfig.mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).catch(error => console.log(error));;

mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  );

  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

// routes config
app.use("/api/rooms", rooms());
app.use("/api/auth", auth());
app.use("/api/movies", movies());
app.use("/api/seanses", seanses());

app.listen(config.server.port, () => {
  console.log(`API server works at port:` + config.server.port);
});
