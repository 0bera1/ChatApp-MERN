const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // root route http://localhost:5001/    
    res.send("Hello World");
});

app.listen(5001, () => console.log("Server running on port 5001"));
