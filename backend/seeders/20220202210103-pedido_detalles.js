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

    const productos = await queryInterface.sequelize.query(
      `SELECT id from productos;`
    );

    const productosRows = productos[0];

    const pedidos = await queryInterface.sequelize.query(
      `SELECT id from pedidos;`
    );

    const pedidosRows = pedidos[0];

    await queryInterface.bulkInsert('pedido_detalles', [
      {id_pedido: pedidosRows[0].id, id_producto: productosRows[1].id, cantidad:3,total: 15, createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[1].id, id_producto: productosRows[2].id, cantidad:10,total: 10,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[2].id, id_producto: productosRows[3].id, cantidad:7,total: 25,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[0].id, id_producto: productosRows[4].id, cantidad:3,total: 9,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[1].id, id_producto: productosRows[5].id, cantidad:2,total: 30,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[2].id, id_producto: productosRows[6].id, cantidad:5,total: 45,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[3].id, id_producto: productosRows[7].id, cantidad:3,total: 15, createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[4].id, id_producto: productosRows[8].id, cantidad:10,total: 10,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[5].id, id_producto: productosRows[9].id, cantidad:7,total: 25,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[3].id, id_producto: productosRows[10].id, cantidad:3,total: 9,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[4].id, id_producto: productosRows[11].id, cantidad:2,total: 30,createdAt: new Date(), updatedAt: new Date()},
      {id_pedido: pedidosRows[5].id, id_producto: productosRows[12].id, cantidad:5,total: 45,createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('pedido_detalles', null, {});
  }
};