'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cars = require('../data/cars.json').map(el => {
      el.createdAt = el.updatedAt = new Date()

      return el
    })
    await queryInterface.bulkInsert('Cars', cars)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {})
  }
};
