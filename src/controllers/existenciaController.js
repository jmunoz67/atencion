const pool = require("../db");
const controller = {};

controller.list = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT marca.marca, agnos.agno , color.color, autos.id FROM autos, marca, agnos, color WHERE autos.idmarca = marca.idmarca AND autos.idagno = agnos.idagno AND autos.idcolor = color.idcolor"
        );
        // console.log("Datos enviados a la vista:", result.rows);
        res.render("existencia", { data: result.rows });
    } catch (err) {
        console.error(err);
        res.json(err);
    }
};

controller.delete = async (req, res) => {
    // porqu eno entra aca
    console.log('delete');
    res.send('hola');
};


controller.update = async (req, res) => {
    // ni aca
    console.log('entro update');
};


module.exports = controller;
