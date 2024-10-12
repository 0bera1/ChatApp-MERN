const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("Hello World !!!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
