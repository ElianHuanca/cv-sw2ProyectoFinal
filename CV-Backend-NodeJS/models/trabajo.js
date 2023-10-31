const { Schema, model } = require('mongoose');

const TrabajoSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio'],        
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion'],
    },
    requisitos: {
        type: String,
        required: [true, 'El rol es obligatorio'],
    },    
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },   
    estado: { 
        type: Boolean, 
        default: true 
    },
});

TrabajoSchema.methods.toJSON = function() {
    const { __v, _id,...data  } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model( 'Trabajo', TrabajoSchema );
