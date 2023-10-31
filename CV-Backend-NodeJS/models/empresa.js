const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    direccion:{
        type: String,
        required: [true, 'La Direccion Es Obligatoria'],
    },
    tipo:{
        type: String,
        required: [true, 'El tipo es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    },
});



EmpresaSchema.methods.toJSON = function() {
    const { __v, password,_id, ...data  } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model( 'Empresa', EmpresaSchema );
