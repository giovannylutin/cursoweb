var app = new Vue({
    el: '#app',
    data: {
      message: 'Menu de retos de platzi segun cursos',
      mensaje2:" Logros Cumplidos",
      carrera: "Escuela de Desarrollo Web",
      contacts: [],
      cursos:[
          {id_curso:1,curso:"Curso Definitivo de HTML y CSS",estado:1},
          {id_curso:2,curso:"Curso Práctico de HTML y CSS",estado:1},
          {id_curso:3,curso:"Curso de Responsive Design",estado:1}
        ],
      clases:[
        {id:1,fk_idcurso:1,class:"clase 8",contenido:"reto 1",enlaceclass:"clases/clase_8.html"},
        {id:2,fk_idcurso:1,class:"clase 19",contenido:" select",enlaceclass:"clases/clase_19.html"},
        {id:3,fk_idcurso:1,class:"clase 20",contenido:" botones",enlaceclass:"clases/clase_20.html"},
        {id:4,fk_idcurso:1,class:"clase 25",contenido:" modelo caja",enlaceclass:"clases/clase_25.html"},
        {id:5,fk_idcurso:1,class:"clase 26",contenido:" herencia",enlaceclass:"clases/clase_26.html"},
        {id:6,fk_idcurso:1,class:"clase 27",contenido:" especifisidad y orden en selectores",enlaceclass:"clases/clase_28.html"},
        {id:7,fk_idcurso:1,class:"clase 28 y 29",contenido:"Mas sobre selectores",enlaceclass:"clases/clase_28.html"},
        {id:8,fk_idcurso:1,class:"clase 34",contenido:" em",enlaceclass:"clases/clase_34.html"},
        {id:9,fk_idcurso:1,class:"clase 35",contenido:" rem",enlaceclass:"clases/clase_35.html"},
        {id:10,fk_idcurso:1,class:"clase ",contenido:" reto 2",enlaceclass:"clases/clase_reto2.html"},
        {id:11,fk_idcurso:1,class:"clase ",contenido:" reto 3",enlaceclass:"clases/clase_reto3.html"},
        {id:12,fk_idcurso:1,class:"clase ",contenido:" reto 4",enlaceclass:"clases/clase_reto4.html"},
        {id:13,fk_idcurso:1,class:"clase 36",contenido:"",enlaceclass:"clases/clase_36.html"},
        {id:14,fk_idcurso:1,class:"clase 37",contenido:"",enlaceclass:"clases/clase_37.html"},
        {id:15,fk_idcurso:1,class:"clase 46",contenido:"",enlaceclass:"clases/clase_46.html"},
        {id:16,fk_idcurso:1,class:"clase 47",contenido:"",enlaceclass:"clases/clase_47.html"},
        {id:17,fk_idcurso:1,class:"clase 50",contenido:"",enlaceclass:"clases/clase_50.html"},
        {id:18,fk_idcurso:1,class:"clase 52",contenido:"",enlaceclass:"clases/clase_52.html"},
        {id:1,fk_idcurso:2,class:"Reto 1",contenido:" Clon de google",enlaceclass:"clases/Curso_Práctico_de_HTML_y_CSS/clase_reto1.html"},
        {id:1,fk_idcurso:2,class:"Reto 2",contenido:" Clon de wikipedia",enlaceclass:"clases/Curso_Práctico_de_HTML_y_CSS/clase_reto2.html"},
        {id:1,fk_idcurso:3,class:"Single page",contenido:"-Estatica",enlaceclass:"clases/Curso_de_Responsive_Design/index.html"}
      ]
     },
    
     mounted: function () {
      console.log('Hello from Vue!')
      this.getAllRequest()
      // getContacts();
      // axios.get('https://testgio90.000webhostapp.com/api.php')
      // .then(response => (this.contacts = response))
      // https://www.techiediaries.com/vuejs-php-mysql-rest-crud-api-tutorial/
    //  console.log(this.contacts)
    //     .then(function (response){
    //       console.log(response.data);
    //      app.contacts = response.data;
    //     })
    //    .catch(function (error) {
    //      console.log(error);
    //  });
    },
    methods:{
      getAllRequest() {
        axios.get('https://testgio90.000webhostapp.com/clases')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
  })
  .then(function () {
  });
      }
    }
});
