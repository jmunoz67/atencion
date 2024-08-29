// routers agregar rutas para ir utilizandolas
const { Router } = require("express");
const router = Router();

const existenciaController = require("../controllers/existenciaController");

// rutas que nos envias del front
router.get('/', existenciaController.list);
router.get('/existencia/delete/:id', existenciaController.delete);


// lo exportamos para ser visto de todos lados
module.exports = router;
