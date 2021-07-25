var app = new Vue({
    el: '#app',
    data: {
      message: 'Menu de Cursos y sus Clases',
      mensaje2:'Logros Cumplidos',
      carrera: 'Escuela de Desarrollo Web',
      cursos:[
        // {"ID_CURSO":"1","ID_CARRERA":"1","CURSO":"Curso Definitivo de HTML y CSS","FECHA_INICIO":"2020-11-02","ESTADO":"1","LINK_ICONO":" http:\/\/drive.google.com\/uc?export=view&id=1IcUstGyysPaS7yluUkVcdn4Xnxp1L2RM","LINK_LOGRO":"pendiente"}
      ],
      clases:[],
      QA:[['a','b','c','d']]
     },
     mounted (){
      //  this.getcursos();
      // this.getQA();
        // this.obtenerCursos();
        // this.obtenerClases();
     },
     methods:{ 
     getcursos() { },
getQA(){
  // const url = 'https://sheets.googleapis.com/v4/spreadsheets/177mom_x9RQ6MpQCsnqOODuKAAD8uaVfJokmthhPLkhY/values/Datos1!A:C?key=AIzaSyC8UFLweLmWi_GwdzrLlI7mfO7Bpp5op5A';
  // fetch(url)
  // .then(res => res.json())
  // .then(res => this.QA=res)
  // .catch( err => console.error(err))
    // axios
    //   .get('https://sheets.googleapis.com/v4/spreadsheets/177mom_x9RQ6MpQCsnqOODuKAAD8uaVfJokmthhPLkhY/values/Datos1!A:C?key=AIzaSyC8UFLweLmWi_GwdzrLlI7mfO7Bpp5op5A')
     
    //     .then(response => (this.QA = response.data.values))
  }
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
