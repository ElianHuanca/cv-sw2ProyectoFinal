const { response, request } = require('express');
const Trabajo = require('../models/trabajo');


const obtenerTrabajos = async (req = request, res = response) => {

    /* try {
        const query = { estado: true };

        const trabajos = await Trabajo.find(query);
        res.json(trabajos);

    } catch (error) {
        // Handle any errors here and send an appropriate response
        res.status(500).json({ error: 'Internal server error' });
    } */

    try {
        const query = { estado: true };

        const trabajos = await Trabajo.find(query).populate('empresa', 'nombre');

        // Map the results to only include the fields you want to return
        const trabajosData = trabajos.map(trabajo => ({
            id: trabajo.id,
            titulo: trabajo.titulo,
            descripcion: trabajo.descripcion,
            requisitos: trabajo.requisitos,
            empresa: trabajo.empresa.nombre, // Access the 'nombre' field of the populated 'empresa'
        }));

        res.json(trabajosData);

    } catch (error) {
        // Handle any errors here and send an appropriate response
        res.status(500).json({ error: 'Internal server error' });
    }


}

const obtenerTrabajo = async (req, res = response) => {

    const { id } = req.params;
    const trabajo = await Trabajo.findById(id);

    res.json(trabajo);

}

const crearTrabajo = async (req, res = response) => {

    /*const { estado, usuario, ...body } = req.body;

    const TrabajoDB = await Trabajo.findOne({ nombre: body.nombre });

    if (TrabajoDB) {
        return res.status(400).json({
            msg: `El Trabajo ${TrabajoDB.nombre}, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const Trabajo = new Trabajo(data);

    // Guardar DB
    await Trabajo.save();

    res.status(201).json(Trabajo);*/


    const { estado, ...data } = req.body;

    const trabajo = new Trabajo(data);
    res.json(trabajo);
    await trabajo.save();

    res.status(201).json(trabajo);
}

const actualizarTrabajo = async (req, res = response) => {

    const { id } = req.params;
    const { estado, idEmpresa, ...data } = req.body;

    /* if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    } */

    data.empresa = idEmpresa;

    const trabajo = await Trabajo.findByIdAndUpdate(id, data, { new: true });

    res.json(trabajo);

}

const borrarTrabajo = async (req, res = response) => {

    const { id } = req.params;
    const trabajoBorrado = await Trabajo.findByIdAndUpdate(id, { estado: false }, { new: true });

    res.json(trabajoBorrado);
}




module.exports = {
    crearTrabajo,
    obtenerTrabajos,
    obtenerTrabajo,
    actualizarTrabajo,
    borrarTrabajo
}