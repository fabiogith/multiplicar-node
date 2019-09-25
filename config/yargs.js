const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limete: {
        demand: true,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('crear', 'Crear el archivo con la tabla de multiplicar', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}