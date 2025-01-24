const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.port;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

app.get("/", (request, response) => {
    response.send("Sup")
})