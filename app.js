const data = require("./db");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log("Server running on port 3000 uwu"));