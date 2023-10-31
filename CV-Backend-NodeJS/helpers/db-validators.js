
const Usuario = require('../models/usuario');
const Empresa= require('../models/empresa');
const Trabajo = require('../models/trabajo');

const nombreExiste = async( nombre = '' ) => {

    // Verificar si el nombre de usuario existe
    const existeNombre = await Usuario.findOne({ nombre });
    if ( existeNombre ) {
        throw new Error(`El nombre de Usuario: ${ nombre }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeEmpresaPorId = async( id ) => {
    
    const existeEmpresa = await Empresa.findById(id);
    if ( !existeEmpresa ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeTrabajoPorId = async( id ) => {
    
    const existeTrabajo = await Trabajo.findById(id);
    if ( !existeTrabajo ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    existeUsuarioPorId,
    existeEmpresaPorId,
    existeTrabajoPorId,
    nombreExiste
}

