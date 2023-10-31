const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { crearTrabajo,
        obtenerTrabajos,
        obtenerTrabajo,
        actualizarTrabajo, 
        borrarTrabajo } = require('../controllers/trabajos');

const { existeTrabajoPorId } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerTrabajos );

// Obtener una categoria por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeTrabajoPorId ),
    validarCampos,
], obtenerTrabajo );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [     
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('descripcion','La descripcion es obligatoria').not().isEmpty(),
    check('empresa','No es un id de Mongo').isMongoId(),    
    validarCampos
], crearTrabajo );

// Actualizar - privado - cualquiera con token válido
router.put('/:id',[    
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom( existeTrabajoPorId ),
    validarCampos
], actualizarTrabajo );

// Borrar una categoria - Admin
router.delete('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeTrabajoPorId ),
    validarCampos,
], borrarTrabajo);


module.exports = router;