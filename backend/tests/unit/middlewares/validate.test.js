const Joi = require('joi');
const httpStatus = require('http-status');
const ApiError = require('../../../src/utils/ApiError');
const validate = require('../../../src/middlewares/validate');

describe('validate', () => {
  const mockSchema = {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    query: Joi.object().keys({
      page: Joi.number().integer(),
      limit: Joi.number().integer(),
    }),
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }),
  };

  const mockRequest = {
    params: {
      id: '12345',
    },
    query: {
      page: 1,
      limit: 10,
    },
    body: {
      name: 'John Doe',
      email: 'john@example.com',
    },
  };

  const mockResponse = {};
  const mockNext = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call next middleware when input data is valid', () => {
    const middleware = validate(mockSchema);
    middleware(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith();
  });

  it('should call next with ApiError when input data is invalid', () => {
    const invalidRequest = {
      params: {},
      query: {
        page: 'invalid',
      },
      body: {
        name: 'John Doe',
      },
    };

    const middleware = validate(mockSchema);
    middleware(invalidRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(expect.any(ApiError));
    expect(mockNext.mock.calls[0][0].statusCode).toBe(httpStatus.BAD_REQUEST);
  });
});
