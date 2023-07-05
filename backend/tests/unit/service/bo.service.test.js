const {
  getReviews,
  createReview,
  getBusOperatorById,
  listBusOperator,
  createBO,
  updateBO,
  deleteBO,
} = require('../../../src/services/bo.service'); // Replace 'filename' with the actual file name

describe('Bus operator service', () => {
  test('Get bus operator return correct data', async () => {
    const res = await getBusOperatorById('555a4b32-7a88-4e9f-a1e6-21df30765ba1');
    expect(res).toBeDefined();
    expect(res).toEqual({
      id: expect.any(String),
      image_url: expect.any(String),
      phone: expect.any(String),
      name: expect.any(String),
    });
  });
});
