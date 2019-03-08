const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.post('/games', async (req, res) => {
    try {
        if(req.body.title == '' || req.body.title == null ||
        req.body.genre == '' || req.body.genre == null) {
            res.status(422).json({message: 'Title and genre are required fields'});
        } else {
            const post = await Games.insert(req.body);
            res.status(200).json(post);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error adding game to the database'});
    }
});

module.exports = server;