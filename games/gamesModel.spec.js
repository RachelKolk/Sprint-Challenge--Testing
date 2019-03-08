const request = require('supertest');

const db = require('../data/dbConfig.js');
const Games = require('./gamesModel.js');

describe('Games Model functions', () => {

    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate();
        });

        it('should insert the entered game into the db', async () => {
            let game = await Games.insert({
                title: 'Asteroids',
                genre: 'Arcade',
                releaseYear: 1981
            });

            expect(game.title).toBe('Asteroids');
            expect(game.genre).toBe('Arcade');
        })

    })
})