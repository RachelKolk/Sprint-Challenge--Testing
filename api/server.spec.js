const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    describe('POST /games', () => {
        it('takes in info in this format and responds with json', () => {
            return request(server)
              .post('/games')
              .send({
                  title: 'Tetris',
                  genre: 'Console - Gameboy',
                  releaseYear: 1984
              })
              .set('Accept', 'application/json')
              .expect(200)
        });

        it('should error when title field is blank', async () => {
            const res = await request(server)
              .post('/games')
              .send({
                  title: '',
                  genre: 'Console - SNES',
              });

            expect(res.status).toBe(422);
        });

        it('should error when genre field is blank', async () => {
            const res = await request(server)
              .post('/games')
              .send({
                  title: 'Centipede',
                  genre: '',
              });

            expect(res.status).toBe(422);
        });

        it('should error without body', async () => {
            const res = await request(server).post('/games');

            expect(res.status).toBe(422);
        });
        
    });

    describe('GET /games', () => {
        it('should return ok, 200', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/games');

            expect(res.type).toBe('application/json');
        });

        
    });
    
});