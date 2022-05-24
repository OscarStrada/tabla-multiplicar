const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

crearArchivo(`tabla-${argv.b}`, argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log(err));
