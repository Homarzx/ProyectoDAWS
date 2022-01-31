var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Producto = require('../models').producto;

/* GET home page*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productos', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] }
})
.then(productos => {
    res.render('productos', { title: 'My Dashboard :: Productos', productos: productos });
})
.catch(error => res.status(400).send(error))

});

 /*POST productos 
router.post('/productos', (req, res, next) => {
  const producto =  {
     nombre: req.body.nombre,
     //id_categoria: req.body.id_categoria ,
     stock: req.body.stock,
     precio: req.body.precio, 
     imagen: req.body.imagen, 
     descripcion: req.body.descripcion 
  }
  Producto.create(producto)
  .then(productos =>{
     res.send(productos);
     
  })
  .catch(err => res.status(400).send(error))
});
*/


module.exports = router;
