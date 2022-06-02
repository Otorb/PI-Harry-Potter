const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const CharacterRoute = require('./Character')
const ActivityRoute = require('./Activity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/character', CharacterRoute)
router.use('/activity', ActivityRoute)


module.exports = router;
