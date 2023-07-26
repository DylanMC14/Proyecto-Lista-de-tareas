// ---------------------------------------------------------------------------------------- \\


// --Variables-- \\
let agrega= document.getElementById("agrega");
let h5= document.querySelector(".sintareas");
const ContenedorTareas = document.getElementById('ContenedorTareas')
let barra = document.getElementById("barr");
var decrementador= document.getElementById ("resta");
var aumentador= document.getElementById ("suma");
let contador = 0;
let contador2 = 0;
// --Variables-- \\


//----------------- Agregar tarea -----------------\\
const añadirtarea = event => {  
event.preventDefault();
const value =  barra.value
console.log(value); 
if( !value) { // --No ingrese un campo vacio o numeros solos-- \\
    alert('Ingrese texto'); return;
 }else if(!isNaN(value)) {
    alert('No es un texto'); return; 
 };
//----------------- ================ -----------------\\
                        // && \\
//----------------- ================ -----------------\\
 const tarea= document.createElement("li");  // --Crea una lista desordenada-- \\

tarea.addEventListener("click",tareanueva)  // --Agrega la tarea-- \\
    tarea.textContent= value
    ContenedorTareas.appendChild(tarea);
    event.target.reset();
//----------------- ================ -----------------\\
                        // && \\
//----------------- ================ -----------------\\
    var eliminar = document.createElement("span"); // --Eliminar tarea-- \\
        eliminar.textContent="❌";
        tarea.appendChild(eliminar);

        incrementar1();
        Actualizar1();
//----------------- ================ -----------------\\
                       // && \\
//----------------- ================ -----------------\\
        var check = document.createElement("span"); // --Tarea completa-- \\
        check.textContent="✅";
        tarea.prepend(check);

        Actualizar2();
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\
        check.addEventListener ("click",function(eliminartareas){
            tarea.remove();  // --Funcion de check-- \\

            Decrementar1();
            incrementar2();
            Actualizar2();
            Actualizar1();
        });
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\
        eliminar.addEventListener ("click",function(eliminartareas){
            tarea.remove();  // --Funcion de eliminar-- \\
            
            Decrementar1();
            Actualizar1();
        });
    };
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\
    tareanueva= event => {
        event.target.toggle("done");     // --Funcion para agregar tarea-- \\
    };
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\
function incrementar1(){ 
    contador++
};
function Decrementar1(){      // --Funcion de contador1-- \\
    contador--
};
function Actualizar1(){
    decrementador.textContent = contador
};
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\
function incrementar2(){
    contador2++
};                            // --Funcion de contador2-- \\

function Actualizar2(){
    aumentador.textContent = contador2
};
//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\

//----------------- TEXTO: "No Hay Tareas" -----------------\\



// ---------------------------------------------------------------------------------------- \\