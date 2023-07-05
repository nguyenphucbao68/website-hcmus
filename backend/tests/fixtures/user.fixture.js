const faker = require('faker');

const password = 'password1';

const adminOne = {
  id: 'c118f693-8722-4461-a79d-d76991b96a9e',
  email: 'nguyenphucbao68@gmail.com',
  role: 0,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const adminTwo = {
  id: 'c118f693-8722-4461-a79d-d76991b96bcd',
  email: 'khanhndq2002@gmail.com',
  role: 0,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const busOpOne = {
  id: 'c118f693-8722-4461-a79d-d76991b96afd',
  email: 'busop1@gmail.com',
  role: 1,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const busOpTwo = {
  id: 'c118f693-8722-4461-a79d-d76991b96acf',
  email: 'busop2@gmail.com',
  role: 1,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const userOne = {
  id: 'c118f693-8722-4461-a79d-d76991b96fdf',
  email: 'user1@gmail.com',
  role: 2,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const userTwo = {
  id: 'c118f693-8722-4461-a79d-d76991b96abf',
  email: 'user2@gmail.com',
  role: 2,
  password: Buffer.from('$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O'),
  create_time: '2022-03-22T12:26:44.480Z',
  update_time: '2022-08-27T14:43:55.772Z',
};

const randomUser = {
  id: 'c118f693-8722-4461-a79d-d76991b96abf', //
  email: faker.internet.email().toLowerCase(),
  password,
  role: 2,
  create_time: '2022-03-22T12:26:44.480Z', //
  update_time: '2022-08-27T14:43:55.772Z', //
};

module.exports = {
  userOne,
  userTwo,
  busOpOne,
  busOpTwo,
  adminOne,
  adminTwo,
  randomUser,
};
