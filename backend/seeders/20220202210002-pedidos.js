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
    const clientes = await queryInterface.sequelize.query(
      `SELECT id from clientes;`
    );
    
    const clientesRows = clientes[0]

    await queryInterface.bulkInsert('pedidos', [
      {fecha: new Date(), id_cliente: clientesRows[0].id, total_pedido: 100,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[1].id, total_pedido: 150,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[2].id, total_pedido: 100,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[3].id, total_pedido: 50,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[4].id, total_pedido: 300,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[5].id, total_pedido: 200,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[6].id, total_pedido: 100,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[7].id, total_pedido: 20,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[8].id, total_pedido: 30,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[9].id, total_pedido: 100,createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), id_cliente: clientesRows[10].id, total_pedido: 100,createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};

