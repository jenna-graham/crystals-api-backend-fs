const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('crystal routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /crystals should return a list of crystals', async () => {
    const resp = await request(app).get('/crystals');
    expect(resp.body.length).toEqual(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /crystals/:id should return the crystal detail', async () => {
    const resp = await request(app).get('/crystals/2');
    expect(resp.body).toEqual({
      id: '2',
      name: 'Amethyst',
      color: 'purple',
      zodiac: 'Capricorn',
      properties: 'Spirituality and meditation',
    });
  });
  afterAll(() => {
    pool.end();
  });
});
