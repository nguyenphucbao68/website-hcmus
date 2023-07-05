const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { userOne, userTwo } = require('../fixtures/user.fixture');
const { userOneAccessToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('User routes', () => {
  describe('GET /v1/user/:userId', () => {
    test('should return 200 and the user object if data is ok', async () => {
      const res = await request(app)
        .get(`/v1/user/${userOne.id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.OK);

      expect(res.body).not.toHaveProperty('password');
      expect(res.body).toMatchObject({
        id: userOne.id,
        email: userOne.email,
        role: userOne.role,
        create_time: expect.anything(),
        update_time: expect.anything(),
      });
    });

    test('should return 401 error if access token is missing', async () => {
      await request(app).get(`/v1/user/${userTwo.id}`).send().expect(httpStatus.UNAUTHORIZED);
    });

    test('should return 403 error if user is trying to get another user', async () => {
      await request(app)
        .get(`/v1/user/${userTwo.id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.FORBIDDEN);
    });
  });
});
