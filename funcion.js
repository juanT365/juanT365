function mostrar(){

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("Edad").value;
    var ver = document.getElementById("mostrar");

    ver.innerHTML = `hola mi nombre es ${nombre} y tengo ${edad}`
}


var boton = document.getElementById("boton");
boton.addEventListener("click", mostrar); 
