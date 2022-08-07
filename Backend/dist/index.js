"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("../config/config"));

var _rooms = _interopRequireDefault(require("./routes/rooms"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _movies = _interopRequireDefault(require("./routes/movies"));

var _seanses = _interopRequireDefault(require("./routes/seanses"));

var _database = _interopRequireDefault(require("../config/database"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: ".env"
});

console.log("Secret for JWT: ", process.env.JWT_SECRET);

_mongoose["default"].connect(_database["default"].mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})["catch"](function (error) {
  return console.log(error);
});

;
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connection.on("error", function (err) {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); // Request methods you wish to allow

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow

  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'); //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Pass to next layer of middleware

  next();
}); // routes config

app.use("/api/rooms", (0, _rooms["default"])());
app.use("/api/auth", (0, _auth["default"])());
app.use("/api/movies", (0, _movies["default"])());
app.use("/api/seanses", (0, _seanses["default"])());
app.listen(_config["default"].server.port, function () {
  console.log("API server works at port:" + _config["default"].server.port);
});