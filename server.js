const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const ports = {
  http: 3001,
  https: 3000,
};
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
  key: fs.readFileSync("./.certs/192.168.1.12/key.pem"),
  cert: fs.readFileSync("./.certs/192.168.1.12/cert.pem"),
};

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  http.createServer(server).listen(ports.http);
  https.createServer(options, server).listen(ports.https);
});
