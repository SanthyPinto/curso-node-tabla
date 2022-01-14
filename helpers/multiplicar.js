const fs = require('fs');
// import * as fs from 'fs/promises';
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida, consola = '';

        // let i = 0;

        for (let i = 1; i <= hasta; i++) {

            salida += (`${ base } x ${ i } = ${ base * i }\n`);
            consola += (`${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`);
        }

        if (listar) {
            console.log('==================='.green);
            console.log('      Tabla del: '.green, colors.blue(base));
            console.log('==================='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${ base }.txt`, salida);

        return `Tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}