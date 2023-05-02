import "./style.css";

const haAcertadoElNumero = (numeroAAcertar, numeroDelUsuario) => {
  if (numeroAAcertar === numeroDelUsuario) {
    console.log("El usuario ha acertado");
  } else {
    console.log("No es el número, prueba otra vez");
  }
};
console.log(haAcertadoElNumero(50, 50)); // Mensaje de consola: El usuario ha acertado;
console.log(haAcertadoElNumero(50, 51));
