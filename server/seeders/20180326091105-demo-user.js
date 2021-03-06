const bcrypt = require('bcrypt');
const faker = require('faker');

const length = Array(11).fill().map((x, i) => i + 1);

const users = length.map(len => ({
  name: faker.name.findName(),
  phone: `+234 - ${Math.floor(100000000 + Math.random() * 900000000)}`,
  email: faker.internet.email(),
  password: `${bcrypt.hashSync('password', 10)}`,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', users, {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users'),
};
