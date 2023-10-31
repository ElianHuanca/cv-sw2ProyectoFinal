
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existeEmpresaPorId } = require('../helpers/db-validators');

const { empresasGet,
        empresaGet,
        empresasPut,
        empresasPost,
        empresasDelete
} = require('../controllers/empresas');

const router = Router();


router.get('/', empresasGet );

router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeEmpresaPorId ),
    validarCampos,
], empresaGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeEmpresaPorId ),    
    validarCampos
],empresasPut );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),        
    validarCampos
], empresasPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeEmpresaPorId ),
    validarCampos
],empresasDelete );

module.exports = router;