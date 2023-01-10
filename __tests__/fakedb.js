// mock db for testing
const mockDb = {
  createUser: jest.fn(),
  getUser: jest.fn(),
};

module.exports = mockDb;
