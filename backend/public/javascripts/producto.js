const on = (element,event,selector,handler)=>{
	element.addEventListener(event, e =>{
		if(e.target.closest(selector)){
			handler(e)
		}
	})
}
//Funcion crearProducto
var crearProducto = () => {
	on(document,'click', 'button.btn.btn-success.btn-block',e =>{
		console.log("Boton Crear")
		opcion="crear"		
		var boton=document.querySelector("button.btn.btn-primary")
		boton.addEventListener('click', (e)=>{
		var texto=document.getElementsByClassName("form-control")
		console.log(texto[3].value)
		const myDataObject ={ 
			nombre:texto[1].value,
			id_categoria:texto[2].value,
			stock:texto[3].value,
			precio:texto[4].value,
			imagen:texto[5].value,
			descripcion:texto[6].value
			}
			fetch('http://localhost:3000/dashboard/api/productos', {
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
var eliminarProducto = () => {
		on(document,'click', 'a.delete',e =>{
			console.log("Boton Eliminar")
			const fila = e.target.parentNode.parentNode.parentNode
			const ide= fila.children[0].innerHTML
			console.log(ide) 
			const myDataObject ={ id: ide}
			let isDelete=confirm(`¿Estas seguro que desea eliminar el producto con el id: ${ide}?`)
			if(isDelete){
				
			fetch('http://localhost:3000/dashboard/api/productos', {
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
var editarProducto = () => {

	on(document,'click', "button.btn.btn-sm.btn-outline-secondary.badge",e =>{
		console.log("Boton Editar")
		
		const fila = e.target.parentNode.parentNode
		const ide= fila.children[0].innerHTML
		console.log(ide)
		fetch('http://localhost:3000/dashboard/api/productos/'+ide)
		.then(texto => texto.json())
		.then(clientes => {
			var texto=document.getElementsByClassName("form-control")
				
				
				console.log(texto[7].value)
				console.log(texto[8].value)
				console.log(texto[9].value)
				console.log(texto[10].value)
				console.log(texto[11].value)
				console.log(texto[12].value)
			for(let cliente of clientes) {
				
				var texto=document.getElementsByClassName("form-control")
				texto[7].value=cliente.nombre
				texto[8].value=cliente.id_categoria
				texto[9].value=cliente.stock
				texto[10].value=cliente.precio
				texto[11].value=cliente.imagen
				texto[12].value=cliente.descripcion
				
			
			opcion="editar"	
			var boton=document.querySelector("button.botonGuardar.btn-primary")
			console.log(opcion)
	
			boton.addEventListener('click', (e)=>{
				console.log("entre")
			const myDataObject ={ id: ide,
				nombre:texto[7].value,
				id_categoria:texto[8].value,
				stock: texto[9].value,
				precio: texto[10].value,
				imagen: texto[11].value,
				descripcion: texto[12].value
				}

			fetch('http://localhost:3000/dashboard/api/productos/', {
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
	crearProducto()
	eliminarProducto()
	editarProducto()

}