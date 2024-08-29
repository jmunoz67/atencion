// routers agregar rutas para ir utilizandolas
const { Router } = require("express");
const router = Router();

const autosController = require("../controllers/autosController");


// rutas que nos envias del front
router.get("/", autosController.inicio);

/*router.post('/add', autoController.save);
router.get('/delete/:id', autoController.delete);
router.get('/update/:id', autoController.edit);
router.post('/update/:id', autoController.update);
 */
// lo exportamos para ser visto de todos lados
module.exports = router;
