'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class administradore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  administradore.init({
    cedula: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'administradore',
  });
  return administradore;
};