const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(4400, () => console.log("Listening on 4400"));
