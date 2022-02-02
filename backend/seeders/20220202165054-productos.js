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
     for (let i = 0; i <20; i++) {
      await queryInterface.bulkInsert('Productos', [{
          nombre: 'Pastel '+i,
          id_categoria:1,
          stock: 10+i,
          precio: 15+i,
          imagen: 'Imagen - Pastel '+i,
          descripcion:'Descripcion - Pastel '+i,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
      }
      for (let i = 0; i <20; i++) {
        await queryInterface.bulkInsert('Productos', [{
            nombre: 'Cupcake '+i,
            id_categoria:2,
            stock: 10+i,
            precio: 15+i,
            imagen: 'Imagen - Cupcake '+i,
            descripcion:'Descripcion - Cupcake '+i,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
        }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Productos', null, {});
  }
};
