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
const handleBlogRequest = (request, response) => {
    response.send("<h1>This is your Blog page</h1>");
};
const handleSocialRequest = (request, response) => {
    response.send("<h1>This is your Social page</h1>");
};

server.use("/about", handleAboutRequest);
server.use("/settings", handleSettingsRequest);
server.use("/Social", handleSocialRequest);
server.use("/Blog", handleBlogRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => console.log("server running on port 3000"));
