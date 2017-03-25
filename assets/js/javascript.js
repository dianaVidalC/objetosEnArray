
  var personal=[{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleaños : "23 de enero" },
                { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleaños : "25 de noviembre" },
                { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleaños : "02 de marzo" },
                { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleaños : "10 de octubre" },
                { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleaños : "23 de enero" } ];

  var contenedor=document.getElementById("datos");

  personal.forEach(function(elemento){

    var divContenedor=document.createElement("div");
    var ulContenedor=document.createElement("ul");
    divContenedor.classList.add("contenedor");

    for(var prop in elemento){

      var liContenedor=document.createElement("li");
      liContenedor.innerHTML=prop+ ":" + elemento[prop];
      ulContenedor.appendChild(liContenedor);
      divContenedor.appendChild(ulContenedor);
    }
      contenedor.appendChild(divContenedor);
  });
