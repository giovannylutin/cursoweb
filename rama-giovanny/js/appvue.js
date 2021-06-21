var app = new Vue({
    el: '#app',
    data: {
      message: 'Menu de Cursos y sus Clases',
      mensaje2:'Logros Cumplidos',
      carrera: 'Escuela de Desarrollo Web',
      cursos:[],
      clases:[]
     },
     mounted (){
      //  this.getcursos();
        this.obtenerCursos();
        this.obtenerClases();
     },
     methods:{ 
      //  getcursos(){
         
        //  fetch('https://testgio90.000webhostapp.com/cursos')
      
        //  .then(function(resp){
        //    return resp.json();
        
        //  })
        //  .catch(function(error) {

        //  });
      //  } 
      
      
      // obtenerCursos(){
      //   axios
      //   .get('https://testgio90.000webhostapp.com/cursos'+'?nocache='+new Date().getTime())
      //     // .get('http://192.168.1.15/api/cursos')
      //    .then(response => (this.cursos = response.data))
      //  },
      //  obtenerClases(){
      //   axios
      //   //  .get('http://192.168.1.15/api/clases')
      //   .get('https://testgio90.000webhostapp.com/clases'+'?nocache='+new Date().getTime())
      //   .then(response => (this.clases = response.data))
          
      //  }
     }
});
