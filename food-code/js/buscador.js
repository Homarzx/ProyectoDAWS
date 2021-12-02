
window.onload=function(){
   const boton = document.getElementsByClassName("form-control1");
  console.log(boton[0])
  boton[0].addEventListener("keyup", filtrado,false);
}


function filtrado() {
	console.log("probando")
	boton1=document.getElementsByClassName("form-control1");
	console.log(boton1)
    let texto_boton=boton1[0].value;
    console.log(texto_boton);
    const elementos=document.getElementsByClassName("blog-box");
    console.log(elementos);
    const cont_planti = document.createElement("li");
	const container = document.getElementsByClassName("col-md-9 clearfix");
	container.innerHTML = '';
  
	for(let i=0;i<elementos.length;i++){
		console.log("mensaje")
		const item=elementos[i];
		console.log(item);
        imagen=item.getElementsByTagName("img")[0];
		console.log(imagen);
		y=item.getElementsByTagName("a")[0];
		titulo=y.getElementsByTagName("h2")[0];
		console.log(titulo);
        descripcion=item.getElementsByTagName("p")[3];
		console.log(descripcion);


	    if(!titulo.textContent.includes(texto_boton)){
	    		$(item).hide();
	    	
	    	
	    }

	    	
        }
        console.log("probando")
        
        }


