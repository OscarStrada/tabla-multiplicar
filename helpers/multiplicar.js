const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (
  nombreArchivo,
  base,
  listar = false,
  limite = 10
) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limite; i++) {
      result = base * i;
      salida += `${base} x ${i} = ${result}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${result}\n`;
    }

    if (listar) {
      console.log("==================".green);
      console.log("   TABLA DEL".green, base);
      console.log("==================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `${nombreArchivo}.txt creada correctamente`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
