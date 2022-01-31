'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedido.init({
    fecha: DataTypes.DATE,
    id_cliente: DataTypes.INTEGER,
    total_pedido: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};