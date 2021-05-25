const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const storyRoutes = require('./routes/stories')
server.use('/story', storyRoutes);

server.get('/', (req, res) => res.send('Adventure Game!'));

module.exports = server;