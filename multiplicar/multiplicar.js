const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} X ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla del ${base}`, data, (err) => {
            if (err) reject(err)
            resolve(`tabla del ${base}`);
        })
    });
}

let listarTabla = (base, limete) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limete)) {
            reject("No permitido");
            return;
        }
        console.log('=============='.green);
        console.log(`Table del ${base}`.green);
        console.log('=============='.green);

        let data = '';

        for (let i = 1; i <= limete; i++) {
            data += `${base} X ${i} = ${base * i} \n`;
        }

        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}