const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index')

const server = express();

server.name = 'server';

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/',routes)

module.exports = server