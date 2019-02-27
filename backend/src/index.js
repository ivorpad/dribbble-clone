const yogaServer = require("../src/yogaServer");
const express = require("express");

const server = yogaServer();

// serve images from public/uploads
server.express.use("/public", express.static("public"));

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  },
  server => {
    console.log(`Console running on port http://localhost:${server.port}`);
  }
);
