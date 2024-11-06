const request = require('supertest');
const app = require('../app');

describe('GET /horoscope', () => {
  it('should return zodiac sign for a valid date', async () => {
    const res = await request(app).get('/horoscope?birthdate=1990-08-15');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sign');
    expect(res.body.sign).toBe('Leo'); // August 15 is Leo
  });

  it('should return error for missing birthdate', async () => {
    const res = await request(app).get('/horoscope');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return error for invalid date format', async () => {
    const res = await request(app).get('/horoscope?birthdate=15-08-1990');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});