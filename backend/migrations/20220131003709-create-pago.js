'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'clientes',
            key: 'id'
        }
      },
      fechaPago: {
        type: Sequelize.DATE
      },
      total_pago: {
        type: Sequelize.DOUBLE
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'pedidos',
            key: 'id'
        }
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
    await queryInterface.dropTable('pagos');
  }
};