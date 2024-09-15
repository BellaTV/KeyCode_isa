// Palabras posibles
const palabras = ["javascript", "programacion", "desarrollo", "web", "ordenador"];

// Seleccionar una palabra aleatoria
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraOculta = "_".repeat(palabra.length).split("");
let intentos = 6;
let letrasAdivinadas = [];

// Función para mostrar el estado actual de la palabra
function mostrarPalabra() {
  console.log(palabraOculta.join(" "));
}

// Función para verificar la letra ingresada
function verificarLetra(letra) {
  if (letrasAdivinadas.includes(letra)) {
    console.log("Ya has ingresado esa letra.");
    return;
  }

  letrasAdivinadas.push(letra);

  if (palabra.includes(letra)) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        palabraOculta[i] = letra;
      }
    }
  } else {
    intentos--;
    console.log(`Letra incorrecta. Te quedan ${intentos} intentos.`);
  }

  mostrarPalabra();

  if (!palabraOculta.includes("_")) {
    console.log("¡Felicidades! Has adivinado la palabra.");
  } else if (intentos === 0) {
    console.log(`Has perdido. La palabra era: ${palabra}`);
  }
}

// Ejemplo de uso
mostrarPalabra();
verificarLetra("a");
verificarLetra("e");
verificarLetra("i");
verificarLetra("o");
verificarLetra("u");