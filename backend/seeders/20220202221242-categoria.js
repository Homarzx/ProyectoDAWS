'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     
      await queryInterface.bulkInsert('Categoria', [{
          nombre: 'Tortas '
          
      }], {});
      await queryInterface.bulkInsert('Categoria', [{
        nombre: 'Cakes '
        
      }], {});
      await queryInterface.bulkInsert('Categoria', [{
        nombre: 'Bocaditos '
      
      }], {});
      await queryInterface.bulkInsert('Categoria', [{
        nombre: 'Material de Reposteria '
    
      }], {});
      await queryInterface.bulkInsert('Categoria', [{
        nombre: 'Utencilios de Reposteria '
    
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categoria', null, {});
  }
};
