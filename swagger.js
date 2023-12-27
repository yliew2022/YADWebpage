const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Event Server API",
        description: "Event server API information",
    },
    host: "localhost:3000" || "https://yadwebpage-ab336b48b130.herokuapp.com",
    schemes: ['http'],
}

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);