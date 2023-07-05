const ApiError = require('../../../src/utils/apiError');

describe('ApiError', () => {
  describe('constructor', () => {
    it('should set the statusCode, message, and isOperational properties', () => {
      const statusCode = 404;
      const message = 'Not Found';
      const isOperational = true;
      const stack = '';

      const apiError = new ApiError(statusCode, message, isOperational, stack);

      expect(apiError.statusCode).toBe(statusCode);
      expect(apiError.message).toBe(message);
      expect(apiError.isOperational).toBe(isOperational);
      // expect(apiError.stack).toBe(stack); Uncomment here later
    });

    it('should set the stack property using Error.captureStackTrace if stack is not provided', () => {
      const statusCode = 500;
      const message = 'Internal Server Error';
      const isOperational = true;

      const apiError = new ApiError(statusCode, message, isOperational);

      expect(apiError.stack).toBeDefined();
    });
  });
});
