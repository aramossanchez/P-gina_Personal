// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

window.addEventListener("click", (e)=>{
  if(screen.width < 769 && e.target.id!=="boton"){
    menuAbierto=false;
    navbar.style.right = "-600px";
  }
})

document.addEventListener("DOMContentLoaded", function() {
  setInterval(() => {
    imagenNombre.classList.add("imagen-nombre-visible");
    imagenDescripcion.classList.add("imagen-nombre-visible");
    imagenPrincipal.classList.add("hr-creciente");
  }, 500);
  
});

// Get the navbar
var navbar = document.getElementById("menu");
var perfil = document.getElementById("perfil");
var imagenPrincipal = document.getElementById("imagen-principal");
var imagenNombre = document.getElementById("imagen-nombre");
var imagenDescripcion = document.getElementById("imagen-descripcion");
var contenedorPerfil = document.getElementById("contenedor-perfil");
var contenedorPresentacionPerfil = document.getElementById("contenedor-presentacion-perfil");
var contenedorPresentacionEstudios = document.getElementById("contenedor-presentacion-estudios");
var contenedorPresentacionExperiencia = document.getElementById("contenedor-presentacion-experiencia");
var contenedorPresentacionHabilidades = document.getElementById("contenedor-presentacion-habilidades");
var contenedorPresentacionProyectos = document.getElementById("contenedor-presentacion-proyectos");
var contenedorPresentacionPersonal = document.getElementById("contenedor-presentacion-personal");
var estudio0 = document.getElementById("estudio0");
var estudio1 = document.getElementById("estudio1");
var estudio2 = document.getElementById("estudio2");
var estudio3 = document.getElementById("estudio3");
var estudio4 = document.getElementById("estudio4");
var estudio5 = document.getElementById("estudio5");
var empresa1 = document.getElementById("empresa1");
var empresa2 = document.getElementById("empresa2");
var empresa3 = document.getElementById("empresa3");
var empresa4 = document.getElementById("empresa4");
var empresa5 = document.getElementById("empresa5");
var empresa6 = document.getElementById("empresa6");
var empresa7 = document.getElementById("empresa7");
var detalleExperiencia1 = document.getElementById("detalle-experiencia-1");
var detalleExperiencia2 = document.getElementById("detalle-experiencia-2");
var detalleExperiencia3 = document.getElementById("detalle-experiencia-3");
var detalleExperiencia4 = document.getElementById("detalle-experiencia-4");
var detalleExperiencia5 = document.getElementById("detalle-experiencia-5");
var detalleExperiencia6 = document.getElementById("detalle-experiencia-6");
var detalleExperiencia7 = document.getElementById("detalle-experiencia-7");
var grupoDistintasHabilidades1 = document.getElementById("grupo-distintas-habilidades-1");
var grupoDistintasHabilidades2 = document.getElementById("grupo-distintas-habilidades-2");
var enlaceRepositorio = document.getElementById("enlace-repositorio");
var aficion1 = document.getElementById("aficion1");
var aficion2 = document.getElementById("aficion2");
var aficion3 = document.getElementById("aficion3");
var aficion4 = document.getElementById("aficion4");

var menuAbierto = false;
var boton = document.getElementById("boton");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Menu pegajoso y Aparición de diferentes elementos de la web según bajamos por la página
function myFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    perfil.classList.add("empujado")
  } else {
    navbar.classList.remove("sticky");
    perfil.classList.remove("empujado");
  }

  if(window.pageYOffset >= 100){
    contenedorPresentacionPerfil.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 250){
    contenedorPerfil.classList.add("aparecer-horizontal");
  }

  if(window.pageYOffset >= 800){
    contenedorPresentacionEstudios.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 950){
    estudio0.classList.add("aparecer-por-izquierda");
  }
  if(window.pageYOffset >= 1050){
    estudio1.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 1200){
    estudio2.classList.add("aparecer-por-izquierda");
  }
  
  if(window.pageYOffset >= 1400){
    estudio3.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 1600){
    estudio4.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 1800){
    estudio5.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 1850){
    contenedorPresentacionExperiencia.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 1900){
    empresa1.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 1900){
    detalleExperiencia1.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 2100){
    empresa2.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 2100){
    detalleExperiencia2.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 2500){
    empresa3.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 2500){
    detalleExperiencia3.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 2750){
    empresa4.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 2750){
    detalleExperiencia4.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 2900){
    empresa5.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 2900){
    detalleExperiencia5.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >=3250){
    empresa6.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >=3250){
    detalleExperiencia6.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 3550){
    empresa7.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 3550){
    detalleExperiencia7.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 3700){
    contenedorPresentacionHabilidades.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 3900){
    grupoDistintasHabilidades1.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 3900){
    grupoDistintasHabilidades2.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 4600){
    contenedorPresentacionProyectos.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 6000){
    enlaceRepositorio.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 6100){
    contenedorPresentacionPersonal.classList.add("aparecer-vertical");
  }

  if(window.pageYOffset >= 6200){
    aficion1.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 6400){
    aficion2.classList.add("aparecer-por-derecha");
  }

  if(window.pageYOffset >= 6600){
    aficion3.classList.add("aparecer-por-izquierda");
  }

  if(window.pageYOffset >= 7000){
    aficion4.classList.add("aparecer-por-derecha");
  }

}

function abrirMenu(){
  if(menuAbierto===false){
    navbar.style.right = 0;
    menuAbierto=true;
  }
}

function verTexto(proyecto,texto){
  document.getElementById(proyecto).classList.add("texto-proyecto-visible");
  document.getElementById(texto).classList.add("texto-proyecto-visible");
}

function ocultarTexto(proyecto, texto){
  document.getElementById(proyecto).classList.remove("texto-proyecto-visible");
  document.getElementById(texto).classList.remove("texto-proyecto-visible");
}

function verDato(elemento){
  document.getElementById(elemento).classList.add("dato-visible");
}