var app = new Vue({
    el: '#app',
    data: {
      message: 'Menu de retos de platzi segun cursos',
      cursos:[
          {id:1,curso:"Curso Definitivo de HTML y CSS",estado:1}
        ],
      clases:[
        {id:8,class:"clase 8",contenido:"reto 1",enlaceclass:"clases/clase_8.html"},
        {id:19,class:"clase 19",contenido:" select",enlaceclass:"clases/clase_19.html"},
        {id:20,class:"clase 20",contenido:" botones",enlaceclass:"clases/clase_20.html"}
      ]
    }
    })