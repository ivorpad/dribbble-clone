const yogaServer = require("../src/yogaServer");

const server = yogaServer();

server.start({
  cors: {
    credentials: true,
    origin: "http://localhost:7777"
  },
}, server => {
  console.log(`Console running on port http://localhost:${server.port}`)
});
