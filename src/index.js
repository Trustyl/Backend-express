const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
    response.send("<h1>Hello world this is a home page</h1>");
};
const handleAboutRequest = (request, response) => {
    response.send("<h1>This is your About page</h1>");
};
const handleSettingsRequest = (request, response) => {
    response.send("<h1>This is your Settings page</h1>");
};

server.use("/about", handleAboutRequest);
server.use("/settings", handleSettingsRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => console.log("server running on port 3000"));
