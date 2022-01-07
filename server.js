const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const ports = {
  http: 3000,
  https: 3001,
};
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
  key: fs.readFileSync("./certs/key.pem"),
  cert: fs.readFileSync("./certs/cert.pem"),
};

app.prepare().then(() => {
  server.get("/cert", (req, res) => {
    res.sendFile("/certs/cert.pem", { root: __dirname });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  http.createServer(server).listen(ports.http);
  https.createServer(options, server).listen(ports.https);
});
