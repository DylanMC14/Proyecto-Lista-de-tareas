// ---------------------------------------------------------------------------------------- \\


// --Variables-- \\
let agrega= document.getElementById("agrega");
let h5= document.querySelector(".sintareas");
const ContenedorTareas = document.getElementById('ContenedorTareas')
let barra = document.getElementById("barr");
var decrementador= document.getElementById ("resta");
var aumentador= document.getElementById ("suma");
let pendientes= document.getElementById("pendientes");
let vacio="No hay tareas";
let contador = 0;
let contador2 = 0;
let totalDeTareas = 0;
evaluartareas ();
// --Variables-- \\

// --Variables Encabezado-- \\
const reloj = document.querySelector (".reloj");
const fecha = document.querySelector (".fecha");
const tiempo = document.querySelector (".tiempo");
// --Variables Encabezado-- \\

//----------------- Encabezado -----------------\\
function relojdigital() {
    const fh = new Date ();
    dia= fh.getDate(),
    mes= fh.getMonth()+1,
    anio= fh.getFullYear(),
    diasemana= fh.getDay();

    dia= ("0"+dia).slice(-2);
    mes= ("0"+dia).slice(-2);

    let tiemporeal= fh.toLocaleTimeString();
    tiempo.innerHTML= tiemporeal;

    // let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    // let showSemana = (semana[diasemana])
    // fecha.innerHTML= {showSemana}+{dia}-{mes}-{anio};
};

setInterval (() =>{
    relojdigital()
},1000)

 //----------------- ================ -----------------\\
                        // && \\
//----------------- ================ -----------------\\

//----------------- Agregar tarea -----------------\\
function añadirtarea (event) {  
event.preventDefault();
const value =  barra.value
console.log(value); 
if( !value) { // --No ingrese un campo vacio o numeros solos-- \\
    Swal.fire({
        title: 'Enter text',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }); return;
 }else if(!isNaN(value)) {
    Swal.fire({
        title: 'Not a text',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }); return; 
 };

//----------------- ================ -----------------\\
                        // && \\
//----------------- ================ -----------------\\

 const tarea= document.createElement("li");  // --Crea una lista desordenada-- \\

tarea.addEventListener("click",tareanueva)  // --Agrega la tarea-- \\
    tarea.textContent= value;
    ContenedorTareas.appendChild(tarea);
    event.target.reset();
    incrementarTotalDeTareas(); 

//----------------- ================ -----------------\\
                        // && \\
//----------------- ================ -----------------\\

    var eliminar = document.createElement("span"); // --Eliminar tarea-- \\
        eliminar.textContent=" 〰️|🔥|";
        tarea.appendChild(eliminar);

        incrementar1();
        Actualizar1();


        

//----------------- ================ -----------------\\
                       // && \\
//----------------- ================ -----------------\\

        var check = document.createElement("span"); // --Tarea completa-- \\
        check.textContent="|🍃|〰️ ";
        tarea.prepend(check);

        Actualizar2();

//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\

        check.addEventListener ("click",function(eliminartareas){
            tarea.remove();  // --Funcion de check-- \\
            
            decremetarTotalDeTareas()
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
            decremetarTotalDeTareas();

        });
    };

//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\

    function tareanueva(event) {             // --Funcion para agregar tarea-- \\
        event.target.classList.toggle("done");  
    }

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

function evaluartareas () {
    console.log(totalDeTareas);
    if (totalDeTareas == 0) {
        h5.innerHTML= "No homework";     // --Funcion de evaluar cantidad de tareas-- \\
    } else  {
        h5.innerHTML= "";
    }
}

function incrementarTotalDeTareas() {
  totalDeTareas = totalDeTareas +1;      // --Funcion para agregar el texto-- \\
  evaluartareas();
}

function decremetarTotalDeTareas() {
    if ( totalDeTareas > 0) {
        totalDeTareas = totalDeTareas -1;     // --Funcion para eliminar texto-- \\
        evaluartareas();
    }
}

//----------------- ================ -----------------\\
                      // && \\
//----------------- ================ -----------------\\

setdate()
// ---------------------------------------------------------------------------------------- \\