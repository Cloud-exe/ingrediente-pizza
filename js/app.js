const container = document.getElementById("container");
console.log(typeof container);
console.log(container);
console.log(container.baseURI);
console.log(container.className);
console.log(container.innerHTML);

const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.innerHTML);

const fruta = document.getElementsByClassName("fruta");
console.log(fruta[0].innerText);

const verdura = document.getElementsByClassName("verdura");
console.log(verdura[1].innerText);

//querySelector()
const ingrediente = document.querySelector(".ingrediente");
console.log(ingrediente);

const ingreVerdura = document.querySelector(".ingrediente.verdura");
console.log(ingreVerdura);

const ingreFruta = document.querySelector("ul li.fruta");
console.log(ingreFruta);

//querySeectorAll()
const listaVerduras = document.querySelectorAll(".verdura");
console.log(listaVerduras);
console.log(listaVerduras[1].innerText);

// Trabajar con estilos en JavaScript

const primerIngrediente = document.querySelector(".ingrediente");
console.log(primerIngrediente); // Aceituna
primerIngrediente.style.backgroundColor = "green";

const otroIngrediente = document.getElementById("pinia");
console.log(otroIngrediente);
otroIngrediente.style.backgroundColor = "silver"; // Pongo el fondo en color plata
otroIngrediente.style.textTransform = "uppercase";

// Trabajar con el texto
// Formas de recuperar un texto
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.textContent);
console.log(titulo.innerHTML);
titulo.innerText = "Lista Pizza";

// Formas de modificar un atributo
const anchor = document.querySelector("a");
console.log(anchor);
console.log(anchor.getAttribute("href"));

// Eliminar atributo
anchor.removeAttribute("href");
anchor.setAttribute("href", "https://elpais.com");

// Modificar clases
console.log(listaVerduras);
const queso = document.querySelector(".queso");
console.log(queso);
console.log(queso.classList);
queso.classList.add("nuevo");
console.log(queso.classList);
console.log(queso.classList.contains("nuevo"));
if (queso.classList.contains("nuevo")) {
  queso.classList.add("texto-rojo", "enlace");
  queso.classList.remove("nuevo");
}

// Crear elementos

// Nuevo ingrediente
const nuevoIngrediente = document.createElement("li");
console.log(nuevoIngrediente);
nuevoIngrediente.setAttribute("id", "mozzarella");
nuevoIngrediente.classList.add("ingrediente", "queso");
nuevoIngrediente.innerText = "Mozzarella";

// Contenedor
const listaIngredientes = document.getElementById("lista-ingredientes");

listaIngredientes.appendChild(nuevoIngrediente);

// Eliminar un elemento
nuevoIngrediente.remove();

//Generar color aleatorio
function colorHex() {
  let listaHex = "0123456789ABCDEF";
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    colorHex += listaHex[Math.floor(Math.random() * listaHex.length)];
  }
  return colorHex;
}
console.log(colorHex());

const champ = document.querySelectorAll(".ingrediente");

let champinion = {};
for (let i = 0; i < champ.length; i++) {
  if (champ[i].innerText === "Champiñones") {
    champinion = champ[i];
  }
}
console.log(champinion);

champinion.addEventListener("click", () => {
  let colorAleatorio = colorHex();
  console.log(colorAleatorio);
  champinion.style.backgroundColor = colorAleatorio;
  console.log(document);
});
