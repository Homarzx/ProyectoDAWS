var express = require('express');
var router = express.Router();

const { Op } = require("sequelize");
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

let bd = {
  'usuario': 'abc',
  'contrasenia': '123'
}

router.get('/api/administrador/1', (req, res, next) => {
  models.administrador.findAll({ 
       
    attributes: { exclude: ["updatedAt"] }
  })
  .then(administradores => {
      res.send(administradores)
     
    
  })
  .catch(error => res.status(400).send(error))

});
router.get('/out', function(req, res, next) {

  res.cookie('usuario', '', {expires: new Date(0)});
  req.session = null;
  res.redirect('/')
});




router.post('/api/administrador/1', function(req, res, next) {
  let usuario = req.body.user;
  let contrasenia = req.body.password;

  console.log("usuario: ", usuario)
  console.log("contraseña: ", contrasenia)
  models.administrador.findAll({ 
       
    attributes: { exclude: ["updatedAt"] }
  })
  .then(administradores => {
	
			
			for(let cliente of administradores) {
        bd['usuario']=cliente.usuario
        bd['contrasenia']=cliente.contrasena

        if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
          res.cookie('usuario',usuario , {expire : new Date() + 9999});
          req.session.usuario = usuario;
          res.redirect('/dashboard');
        } else {
          res.cookie('usuario', '', {expires: new Date(0)});
          req.session = null;
          res.redirect('/')
        }

      }
    })
				
				
        
				
				

  //Validación
  

});

module.exports = router;
