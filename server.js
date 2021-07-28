const express = require("express");

const app = express();

//single endpoint to test server running
app.get("/", (req, res) => res.send("api running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
