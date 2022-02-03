const on = (element,event,selector,handler)=>{
	element.addEventListener(event, e =>{
		if(e.target.closest(selector)){
			handler(e)
		}
	})
}
//Funcion crearCliente
var crearCliente = () => {
	on(document,'click', 'button.btn.btn-success.btn-block',e =>{
		console.log("Boton Crear")
		opcion="crear"		
		var boton=document.querySelector("button.btn.btn-primary")
		
		
		boton.addEventListener('click', (e)=>{
		var texto=document.getElementsByClassName("form-control")
		const myDataObject ={ 
			cedula:texto[3].value,
			nombre:texto[1].value,
			apellido:texto[2].value,
			telefono:texto[4].value,
			correo:texto[5].value,
			usuario:texto[6].value,
			contrasena:texto[7].value
			}
			fetch('http://localhost:3000/dashboard/api/clientes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				
				body: JSON.stringify(myDataObject)
				})
			.then(response =>response.json( ))
			})
			
	})

	

}

//Funcion Eliminar Producto
var eliminarCliente = () => {
		on(document,'click', 'a.delete',e =>{
			console.log("Boton Eliminar")
			const fila = e.target.parentNode.parentNode.parentNode
			const cedule= fila.children[1].innerHTML
			const id=fila.children[0].innerHTML
			console.log(cedule) 
			console.log("hola")
			const myDataObject ={ cedula: cedule}
			let isDelete=confirm(`¿Estas seguro que desea eliminar el cliente con la cedula: ${cedule} e id : ${id}?`)
			if(isDelete){
				
			fetch('http://localhost:3000/dashboard/api/clientes', {
				method: 'DELETE',
				headers: {
					  'Content-Type': 'application/json'
				},
				body: JSON.stringify(myDataObject)
				})
			.then(response => {
				return response.json( )
				
			})
			location.reload()
			}
			else{
				console.log('Cancelar')
			}
			
		})
		
	}

//Editar
var editarCliente = () => {

	on(document,'click', "button.btn.btn-sm.btn-outline-secondary.badge",e =>{
		console.log("Boton Editar")
		
		const fila = e.target.parentNode.parentNode
		const ide= fila.children[0].innerHTML
		console.log(ide)
		fetch('http://localhost:3000/dashboard/api/clientes/'+ide)
		.then(texto => texto.json())
		.then(clientes => {
			var texto=document.getElementsByClassName("form-control")
			for(let cliente of clientes) {
				
				var texto=document.getElementsByClassName("form-control")
				texto[8].value=cliente.nombre
				texto[9].value=cliente.apellido
				texto[10].value=cliente.cedula
				texto[11].value=cliente.telefono
				texto[12].value=cliente.correo
				texto[13].value=cliente.usuario
				texto[14].value=cliente.contrasena
				
			
			opcion="editar"	
			var boton=document.querySelector("button.botonGuardar.btn-primary")
			console.log(opcion)
	
			boton.addEventListener('click', (e)=>{
				console.log("entre")
			const myDataObject ={ id: ide,
				cedula: texto[10].value,
				nombre:texto[8].value,
				apellido:texto[9].value,
				
				telefono: texto[11].value,
				correo:texto[12].value,
				usuario: texto[13].value,
				contrasena: texto[14].value
				}

			fetch('http://localhost:3000/dashboard/api/clientes/', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				
				body: JSON.stringify(myDataObject)
				})
			.then(response =>response.json( ))
			location.reload()
			})
		}
		})
		
		


	
})
}

window.onload = () => {
	crearCliente()
	eliminarCliente()
	editarCliente()

}