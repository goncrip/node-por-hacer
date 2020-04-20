const crearOpts = {
    descripcion: {
        demand: true.value,
        alias: 'd'
    }
};

const actualizarOpts = {
    descripcion: {
        demand: true.value,
        alias: 'd'
    },
    completado: {
        demand: true.value,
        alias: 'c',
        default: true.value
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', crearOpts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizarOpts)
    .command('borrar', 'Borra un elemento de la lista', crearOpts)
    .help()
    .argv;

module.exports = {
    argv
}