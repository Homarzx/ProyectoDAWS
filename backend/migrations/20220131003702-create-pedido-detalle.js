'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedido_detalles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'pedidos',
            key: 'id'
        }
      },
      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'productos',
            key: 'id'
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('pedido_detalles');
  }
};