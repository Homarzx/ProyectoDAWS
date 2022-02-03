var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./cliente");
var _pedido_detalles = require("./pedido_detalle");
var _pedidos = require("./pedido");
var _productos = require("./producto");
var _categoria = require("./categoria");
var _pagos = require("./pago");
var _administrador = require("./administradore");


function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var pedido_detalles = _pedido_detalles(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var categorias = _categoria(sequelize, DataTypes);
  var pagos = _pagos(sequelize, DataTypes);
  var administrador = _administrador(sequelize, DataTypes);

  pedidos.belongsTo(clientes, { foreignKey: "id_cliente"});
  clientes.hasMany(pedidos, {  foreignKey: "id_cliente"});
  pedido_detalles.belongsTo(pedidos, {  foreignKey: "id_pedido"});
  pedidos.hasMany(pedido_detalles, {  foreignKey: "id_pedido"});
  pedido_detalles.belongsTo(productos, { foreignKey: "id_producto"});
  productos.hasMany(pedido_detalles, {  foreignKey: "id_producto"});
  categorias.hasMany(productos, {  foreignKey: "id_categoria"});
  productos.belongsTo(categorias, {  foreignKey: "id_categoria"});

  return {
    clientes,
    pedido_detalles,
    pedidos,
    productos,
    categorias,
    administrador
  };
}


module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
