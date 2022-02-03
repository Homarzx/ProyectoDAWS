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
		console.log(texto[3].value)
		const myDataObject ={ 
			cedula:texto[1].value,
			nombre:texto[2].value,
			apellido:texto[3].value,
			telefono:texto[4].value,
			correo:texto[5].value,
			usuario:texto[6].value
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
			const cedule= fila.children[0].innerHTML
			console.log(cedule) 
			const myDataObject ={ cedula: cedule}
			let isDelete=confirm(`¿Estas seguro que desea eliminar el cliente con la cedula: ${cedule}?`)
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

window.onload = () => {
	crearCliente()
	eliminarCliente()

}