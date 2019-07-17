const express = require('express');
const app = express();

// Configuracion de Servidor
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./Routes/empleados'));



// Comenzar servidor
app.listen(app.get('port'), () => {
    console.log("Server on in port", app.get('port'));
});