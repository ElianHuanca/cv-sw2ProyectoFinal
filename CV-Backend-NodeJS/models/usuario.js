const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    cv:{
        type: String,
        required: [true, 'El cv es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password,_id, ...data  } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model( 'Usuario', UsuarioSchema );
