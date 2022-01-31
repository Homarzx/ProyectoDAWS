'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pago.init({
    id_cliente: DataTypes.INTEGER,
    fechaPago: DataTypes.DATE,
    total_pago: DataTypes.DOUBLE,
    estado: DataTypes.BOOLEAN,
    id_pedido: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pago',
  });
  return pago;
};