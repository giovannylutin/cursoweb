var app = new Vue({
    el: '#app',
    data: {
      message: 'Menu de retos de platzi segun cursos',
      cursos:[
          {id_curso:1,curso:"Curso Definitivo de HTML y CSS",estado:1},
          {id_curso:2,curso:"Aun No se ha Iniciado ......",estado:1}
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
        {id:9,fk_idcurso:1,class:"clase 35",contenido:" rem",enlaceclass:"clases/clase_35.html"}
      ]
    }
    })