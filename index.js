'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Vision = require('vision');

// Declare internals

const internals = {};


const handler = (request, reply) => {

    reply.view('index', {
        title: `bureau.com.uy | Hapi ${request.server.version}`,
        message: 'Hello World!',
        sections: [
            { name: 'promociones' },
            { name: 'sillas' },
            { name: 'lineas escritorios' },
            { name: 'amoblamientos' },
            { name: 'empresa' }
        ]
    });
};


internals.main = function () {

    const server = new Hapi.Server();
    server.connection({ port: 8000 });
    server.register(Vision, (err) => {

        if (err) {
            throw err;
        }

        server.views({
            engines: { html: require('handlebars') },
            relativeTo: __dirname,
            path: 'templates',
            layout: true,
            partialsPath: 'templates/partials',
            helpersPath: 'templates/helpers'
        });

        server.route({ method: 'GET', path: '/', handler });
        server.start((err) => {

            if (err) {
                throw err;
            }

            console.log(`Server is listening at ${server.info.uri}`);
        });
    });
};

internals.main();
