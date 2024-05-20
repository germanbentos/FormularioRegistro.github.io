var opcionPaises = document.querySelector("#opcion_paises");
var paises = document.querySelector("#paises");
var contenidoMenuDesplegable = document.querySelector("#contenido_menu_desplegable");
var menu_desplegable = document.querySelector("#menu_desplegable");
var menu_desplegable_svg = document.querySelector("#menu_desplegable_svg");
var contenedorVacio = document.querySelector("#contenedor_vacio");
var btnEnviar = document.querySelector("#btn_enviar");
var btnCerrar = document.querySelector("#cerrar_pop_up");
var popUp = document.querySelector("#pop_up");

document.querySelectorAll("#opcion_paises > .paises") .forEach((paises) => {
    paises.addEventListener("click",(e) => {
        e.preventDefault();
         contenidoMenuDesplegable.innerHTML = e.currentTarget.innerHTML;
         opcionPaises.classList.toggle("active");
         paises.classList.toggle("active");
    })
});

menu_desplegable_svg.addEventListener("click", () => {
    opcionPaises.classList.toggle("active");
    paises.classList.toggle("active");
    
})
// Pop Up

// btnEnviar.addEventListener("click", () => {
//     popUp.showModal();
// })
// btnCerrar.addEventListener("click", () => {
//     popUp.close();
// })