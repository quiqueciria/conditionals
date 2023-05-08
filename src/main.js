import "./style.css";

const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

const numeroParaAceptar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR = 1;
const EL_NUMERO_ES_MENOR = 2;
const ES_EL_NUMERO_SECRETO = 3;
const GAME_OVER_MAXIMO_INTENTOS = 5;

const MAXIMO_INTENTOS = 5;
let numeroDeIntentos = 0;

const HasSuperadoElNumeroMaximoDeIntentos = () =>
  numeroDeIntentos > MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
  document.getElementById(
    "intentos"
  ).innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
};
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

// ESTA FUNCIÓN SOLO MUESTRA EL MENSAJE
const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `${texto} no es un número pillín`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `UUUYYY! El número ${texto}, es mayor que el número secreto`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `UUUYYY! El número ${texto}, es menor que el número secreto`;
      break;
    case GAME_OVER_MAXIMO_INTENTOS:
      mensaje = `GAME OVER, muchos intentos`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `${texto}, enhorabuena, es el número correcto`;
      break;
    default:
      mensaje = `No sé que ha pasado, pero esto no debería de estar ocurriendo`;
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

// ESTÁ FUNCIÓN COMPRUEBA SI EL NUMERO ES CORRECTO
function comprobarNumero(texto) {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (numero === numeroParaAceptar) {
    return ES_EL_NUMERO_SECRETO;
  }

  if (HasSuperadoElNumeroMaximoDeIntentos()) {
    return GAME_OVER_MAXIMO_INTENTOS;
  }

  return numero > numeroParaAceptar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
}

// ESTA FUNCIÓN EJECUTA LA MUESTRA DEL MENSAJE DE COMPROBACIÓN
const handleCompruebClick = () => {
  const texto = document.getElementById("numero").value;
  numeroDeIntentos++;
  muestraNumeroDeIntentos();
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  gestionarGameOver(estado);
};

// EL BOTÓN NOS MUESTRA EL NÚMERO
const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebClick);
