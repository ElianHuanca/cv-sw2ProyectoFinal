const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Empresa = require('../models/empresa');



const empresasGet = async(req = request, res = response) => {

    const query = { estado: true };

    const empresas= await Empresa.find(query);

    res.json({    
        empresas
    });
}

const empresasPost = async(req, res = response) => {
    const { nombre, password,tipo,direccion } = req.body;
    const empresa = new Empresa({ nombre, password,tipo,direccion });
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    empresa.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await empresa.save();

    res.json(empresa);
}

const empresaGet = async (req, res = response) => {

    const { id } = req.params;
    const empresa = await Empresa.findById(id);

    res.json(empresa);

}



const empresasPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const empresa = await Empresa.findByIdAndUpdate( id, resto );

    res.json(empresa);
}

const empresasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const empresa = await empresa.findByIdAndDelete( id );
    const empresa = await Empresa.findByIdAndUpdate( id, { estado: false } );

    res.json(empresa);
}




module.exports = {
    empresasGet,
    empresaGet,
    empresasPost,
    empresasPut,
    empresasDelete,
}