'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const orders = require('../data/orders.json').map(el => {
      el.createdAt = el.updatedAt = new Date()

      return el
    })
    await queryInterface.bulkInsert('Orders', orders)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {})
  }
};
