const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server Running At ${server.info.uri}\n`);
};
init();
