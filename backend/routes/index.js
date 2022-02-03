var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);


const Pedido = require('../models').pedido;

let bd = {
   'usuario': 'alevquim',
   'contrasenia': 'password'
}
   
   var auth = function(req, res, next) {
      if (req.session && req.session.usuario === bd['usuario'])
        return next();
      else
        return res.sendStatus(401);
   };

/* GET home page*/
router.get('/',auth, function(req, res, next) {
   let usuario = req.cookies.usuario;
  res.render('index', { title: 'Express' , usuario: usuario });
});

/* GET productos. */
router.get('/api/productos', (req, res, next) => {
   models.productos.findAll({ 
      include: [{model: models.categorias,
         attributes: ['id','nombre']
       }],
      attributes: { exclude: ["updatedAt"] }
    })
    .then(productos => {
       res.send(productos)
    })
    .catch(error => res.status(400).send(error))
 });
 
 /* GET productos by ID. */
 router.get('/api/productos/:id', (req, res, next) => {
    models.productos.findAll({ 
      include: [{model: models.categorias,
         attributes: ['id','nombre']
       }],
       where: {
          id:{
            [Op.eq]: req.params.id
          }
         },
       attributes: { exclude: ["updatedAt"] }
     })
     .then(productos => {
        res.send(productos)
     })
     .catch(error => res.status(400).send(error))
 
 });

router.get('/productos', function(req, res, next) {
  models.productos.findAll({
    include: [{model: models.categorias,
      attributes: ['id','nombre']
    }],
    attributes: { exclude: ["updatedAt"] }
})
.then(productos => {
    res.render('productos', { title: 'My Dashboard :: Productos', productos: productos });
})
.catch(error => res.status(400).send(error))

});
/* PUT productos */
router.put('/api/productos', (req, res, next) => {
  const producto =  {
    nombre: req.body.nombre,
    id_categoria: req.body.id_categoria ,
    stock: req.body.stock,
    precio: req.body.precio, 
    imagen: req.body.imagen, 
    descripcion: req.body.descripcion 
  }
  models.productos.update(producto,{
     where:{
        id: req.body.id
     }
  })
  .then(()=>{
     res.send("exito");  
     
  })
  .catch(err => res.status(400).send(error))


});

/* DELETE productos */
router.delete('/api/productos', (req, res, next) => {
  
  models.productos.destroy({
     where:{
        id: req.body.id
     }
  })
  .then(()=>{
     res.send("exito");
     
  })
  .catch(err => res.status(400).send(error))

});

/*POST productos */
router.post('/api/productos', (req, res, next) => {
 const producto =  {
    nombre: req.body.nombre,
    id_categoria: req.body.id_categoria ,
    stock: req.body.stock,
    precio: req.body.precio, 
    imagen: req.body.imagen, 
    descripcion: req.body.descripcion 
 }
 models.productos.create(producto)
 .then(productos =>{
    res.send(productos);
    
 })
 .catch(err => res.status(400).send(error))
});



/*CLIENTES*/

router.get('/clientes', function(req, res, next) {
  models.clientes.findAll({
    attributes: { exclude: ["updatedAt"] }
})
.then(clientes => {
    res.render('clientes', { title: 'My Dashboard :: Clientes', clientes: clientes });
})
.catch(error => res.status(400).send(error))

});

/*POST clientes */
router.post('/api/clientes', (req, res, next) => {
 const cliente =  {
    cedula: req.body.cedula,
    nombre: req.body.nombre ,
    apellido: req.body.apellido,
    telefono: req.body.telefono, 
    correo: req.body.correo, 
    usuario: req.body.usuario,
    contrasena: req.body.contrasena
 }
 models.clientes.create(cliente)
 .then(clientes =>{
    res.send(clientes);

 })
 .catch(err => res.status(400).send(error))
});


/* PUT clientes */
router.put('/api/clientes', (req, res, next) => {
   const cliente =  {
      cedula: req.body.cedula,
      nombre: req.body.nombre ,
      apellido: req.body.apellido,
      telefono: req.body.telefono, 
      correo: req.body.telefono, 
      usuario: req.body.usuario,
      contrasena: req.body.contrasena
    }
   models.clientes.update(cliente,{
      where:{
         id: req.body.id
      }
   })
   .then(()=>{
      res.send("exito");  
      
   })
   .catch(err => res.status(400).send(error))
 
 
 });

/* GET clientes by ID. */
 router.get('/api/clientes/:id', (req, res, next) => {
    models.clientes.findAll({ 
       where: {
          id:{
            [Op.eq]: req.params.id
          }
         },
       attributes: { exclude: ["updatedAt"] }
     })
     .then(clientes => {
        res.send(clientes)
     })
     .catch(error => res.status(400).send(error))

 });


/* DELETE clientes */
router.delete('/api/clientes', (req, res, next) => {

  models.clientes.destroy({
     where:{
        cedula: req.body.cedula
     }
  })
  .then(()=>{
     res.send("exito");

  })
  .catch(err => res.status(400).send(error))

});







/*PEDIDOS*/

router.get('/pedidos', function(req, res, next) {
  Pedido.findAll({
    
    attributes: { exclude: ["updatedAt"] }
})
.then(pedidos => {
    res.render('pedidos', { title: 'My Dashboard :: Pedidos', pedidos: pedidos });
})
.catch(error => res.status(400).send(error))

});

/*CATEGORIA*/

/*GET CATEGORIA*/

router.get('/categorias', function(req, res, next) {
  models.categorias.findAll({
    attributes: { exclude: ["updatedAt"] }
})
.then(categorias => {
    res.render('categorias', { title: 'My Dashboard :: Categorias', categorias: categorias });
})
.catch(error => res.status(400).send(error))

});
router.post('/api/categorias', (req, res, next) => {
  const categoria =  {
     nombre: req.body.nombre,
  }
  models.categorias.create(categoria)
  .then(categorias =>{
     res.send(categorias);
     
  })
  .catch(err => res.status(400).send(error))
});
/* GET categorias. */
router.get('/api/categorias', (req, res, next) => {
   models.categorias.findAll({ 
      
      attributes: { exclude: ["updatedAt"] }
    })
    .then(categorias => {
       res.send(categorias)
    })
    .catch(error => res.status(400).send(error))
 });
 
 /* GET categorias by ID. */
 router.get('/api/categorias/:id', (req, res, next) => {
    models.categorias.findAll({ 
      
       where: {
          id:{
            [Op.eq]: req.params.id
          }
         },
       attributes: { exclude: ["updatedAt"] }
     })
     .then(categorias => {
        res.send(categorias)
     })
     .catch(error => res.status(400).send(error))
 
 });
 /* DELETE CATEGORIAS */
router.delete('/api/categorias', (req, res, next) => {
  
   models.categorias.destroy({
      where:{
         id: req.body.id
      }
   })
   .then(()=>{
      res.send("exito");
      
   })
   .catch(err => res.status(400).send(error))
 
 });

 /* PUT categorias */
router.put('/api/categorias', (req, res, next) => {
   const categoria =  {
     nombre: req.body.nombre,
   }
   models.categorias.update(categoria,{
      where:{
         id: req.body.id
      }
   })
   .then(()=>{
      res.send("exito");  
      
   })
   .catch(err => res.status(400).send(error))
 
 
 });

 //Administrador
 router.post('/api/administrador', (req, res, next) => {
   const administrador =  {
      cedula: req.body.cedula,
      nombre: req.body.nombre ,
      apellido: req.body.apellido,
      telefono: req.body.telefono, 
      correo: req.body.correo, 
      usuario: req.body.usuario,
      contrasena: req.body.contrasena
   }
   models.administrador.create(administrador)
   .then(administradores =>{
      res.send(administradores);
  
   })
   .catch(err => res.status(400).send(error))
  });
 /* GET categorias. */
 router.get('/api/administrador', (req, res, next) => {
    models.administrador.findAll({ 
       
       attributes: { exclude: ["updatedAt"] }
     })
     .then(categorias => {
        res.send(categorias)
     })
     .catch(error => res.status(400).send(error))
  });
  
  /* GET categorias by ID. */
  router.get('/api/administrador/:id', (req, res, next) => {
     models.administrador.findAll({ 
       
        where: {
           id:{
             [Op.eq]: req.params.id
           }
          },
        attributes: { exclude: ["updatedAt"] }
      })
      .then(administradores => {
         res.send(administradores)
      })
      .catch(error => res.status(400).send(error))
  
  });
  





module.exports = router;
