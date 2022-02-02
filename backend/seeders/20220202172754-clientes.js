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
     for (let i = 0; i <50; i++) {
      await queryInterface.bulkInsert('Clientes', [{
          
          cedula: '245688976'+i,
          nombre: 'Nombre '+i,
          apellido: 'Apellido '+i,
          telefono:'222225'+i,
          correo:'cliente'+i+'@gmail.com',
          usuario: 'cli'+i,
          contrasena: 'xxxxxx'+i,
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
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
