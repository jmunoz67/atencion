const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

// importando rutas
const autosRoutes = require("./routes/autos");
const existenciaRoutes = require("./routes/existencia");


// seteamos el puerto
app.set("port", process.env.port || 3000);

// configurar el motor de plantillas
app.set("view engine", "ejs");

// indicar donde estan las carpetas de las views
app.set("views", path.join(__dirname, "views"));

// Middlewares , estos se ejecutan antes que las peticiones
app.use(morgan("dev"));

// permite entende rlos datos que viene del formulario
app.use(express.urlencoded({ extended: false }));

//routes
// cuando peritcion llegue a pedir va a utilizar las rutas de existenciaRoutes
app.use("/", autosRoutes);
app.use("/existencia", existenciaRoutes);
app.use("/delete", existenciaRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// escucha el puerto
app.listen(app.get("port"), () => {
    console.log("server port 3000");
});
