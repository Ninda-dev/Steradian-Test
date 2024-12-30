'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CarId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cars',
          key: 'id'
        },
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pickup_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dropoff_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pickup_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dropoff_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};