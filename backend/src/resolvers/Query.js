const { forwardTo } = require("prisma-binding");

const Query = {
  shots: forwardTo("db"),
  shot: forwardTo("db"),
  users: forwardTo("db"),
  uploads: forwardTo("db")
};

module.exports = Query;
