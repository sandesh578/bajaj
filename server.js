const express = require('express');
const http = require('http');
const cors = require('cors');

const BACKEND_API_PORT = 5026;

console.info('Initiating server');

const app = express();
const Router = express.Router();

// Declaring Access Control
let corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));
app.use(Router);

Router.use(express.urlencoded({ extended: false }));
Router.use(express.json());

const server = http.createServer(app);
server.listen(BACKEND_API_PORT);

console.info(
  `server listening on port ${BACKEND_API_PORT} and url http://localhost:${BACKEND_API_PORT}`
);

module.exports = { server, app, Router };
