'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@email.com',
      role: 'admin',
      uuid: 'dd81332a-4d06-4af4-86b0-92b76b9299ec',
      createdAt: '2021-03-12T15:25:49.000Z',
      updatedAt: '2021-03-12T15:25:49.000Z'
    }, {
      name: 'Jane Doe',
      email: 'jane@email.com',
      role: 'admin',
      uuid: '96273fd6-7511-40f4-851c-1e7c36373937',
      createdAt: '2021-03-12T15:25:49.000Z',
      updatedAt: '2021-03-12T15:25:49.000Z'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
