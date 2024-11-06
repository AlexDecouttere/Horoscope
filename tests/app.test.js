const request = require('supertest');
const app = require('../app');

describe('GET /horoscope', () => {
  it('should return zodiac sign for a valid date', async () => {
    const res = await request(app).get('/horoscope?birthdate=2000-11-24');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sign');
    expect(res.body.sign).toBe('Sagittarius');
  });

  it('should return error for missing birthdate', async () => {
    const res = await request(app).get('/horoscope');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return error for invalid date format', async () => {
    const res = await request(app).get('/horoscope?birthdate=24-11-2000');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});