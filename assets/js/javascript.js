var array=  [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleaños : "23 de enero" },
            { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleaños : "25 de noviembre" },
            { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleaños : "02 de marzo" },
            { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleaños : "10 de octubre" },
            { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleaños : "23 de enero" } ];


  array.forEach(function(elemento){
     document.write("<div><ul><li>Nombre :" + elemento.nombre +"</li><li>Apellido : "
     + elemento.apellido + "</li><li>Rol : "+ elemento.rol + "</li><li>Cumpleaños : " + elemento.cumpleaños +"</li></ul></div>");
     });
