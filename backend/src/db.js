const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma-graphql-client/prisma.graphql",
  endpoint: "http://localhost:4466/backend/dev",
  secret: "my-secret",
  debug: true
});

module.exports = db;
