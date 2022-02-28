const express = require('express');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();


        //rutas
        this.routes();

    }

    middlewares() {



        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en: ', this.port);
        });
    }

}


module.exports = {
    Server
}