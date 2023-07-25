// ---------------------------------------------------------------------------------------- \\


// --Variables-- \\
let agrega= document.getElementById("boton1");
let h5= document.querySelector(".pendientes");
const ContenedorTareas = document.getElementById('ContenedorTareas')
let barra = document.getElementById("barr");
// --Variables-- \\


//----------------- Agregar tarea -----------------\\
agrega.addEventListener ("click",function (e) {
    e.preventDefault();
    console.log(barra.value)
    ContenedorTareas.innerHTML = barra.value

    const tareas = [];
    tareas.push (barra.value);
    // h5.textContent=ContenedorTareas
    // console.log (tareas);
});



//----------------- Contador -----------------\\
var sumas = document.getElementById("suma"); //------- Suma por tarea completada
var circle = 0;

boton1.addEventListener ("click",function () {
    circle++
    sumas.innerHTML = circle  
});

//----------------- Eliminar tarea -----------------\\

// ---------------------------------------------------------------------------------------- \\