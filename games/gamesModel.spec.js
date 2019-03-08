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
            expect(game.releaseYear).toBe(1981);
        });

    });

    describe('findById()', () => {

        it.skip('should return the game with that id number', async () => {
            let game = await Games.findById(1);

            expect(game.title).toBe(1);
        })
    });
});