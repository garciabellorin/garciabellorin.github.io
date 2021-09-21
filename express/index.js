const exp = require("constants");
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

//Inint Middleware
// app.use(logger);

// Boddy parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members api routes
app.use("/api/members", require("./routes/api/members"));
const PORT = process.envPORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
