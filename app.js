const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limete).then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => { console.log(`Archivo creado: ${archivo}`.green); })
            .catch(err => { console.log(err); })
        break
    default:
        console.log('Comando no reconocido');
}