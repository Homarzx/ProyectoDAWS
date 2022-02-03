/* globals Chart:false, feather:false */

(function () {
  'use strict'
  
  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  
  var ctx = document.getElementById('myChart')
  var myChart = new Chart(ctx, {
      type:'bar',
      data:{
          datasets: [{
              label: 'Stock de Productos',
              backgroundColor: ['#6bf1ab','#63d69f', '#438c6c', '#509c7f', '#1f794e', '#34444c', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#0D47A1',
              '#61ab','#6369f', '#438d6c', '#559f7f', '#1c94e', '#54ff4c', '#9eAF9', '#64B456', '#42B5F5', '#2196A3', '#0DC47A1',
              '#615ab','#63c9f', '#43Ad6c', '#509fBf', '#1A794e', '#34FF4c', '#9eBF8', '#64b056', '#42B0F5', '#210F6A3', '#DC4cA1',
              'golden','black', 'red', 'white', 'silver', 'orange', 'yellow'],
              borderColor: ['black'],
              borderWidth:1
          }]
      },
      options:{
          scales:{
              y:{
                  beginAtZero:true
              }
          }
      }
  })

  let url = 'http://localhost:3000/dashboard/api/productos'
  fetch(url)
      .then( response => response.json() )
      .then( datos => mostrar(datos) )
      .catch( error => console.log(error) )


  const mostrar = (articulos) =>{
      articulos.forEach(element => {
          myChart.data['labels'].push(element.nombre)
          myChart.data['datasets'][0].data.push(element.stock)
          myChart.update()
      });
      console.log(myChart.data)
  }   
  
})()

/* globals Chart:false, feather:false */

