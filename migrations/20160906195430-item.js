'use strict';
module.exports = {
  up: function(queryInterface, Sequelize)
  {
    return queryInterface.createTable('Items',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        qty: {
          type: Sequelize.INTEGER
        }
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Items');
  }
};
