import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/connectDB.js";
import messageRoutes from "./routes/messages.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = express(); // create express app

dotenv.config(); // read .env file
const PORT = process.env.PORT || 5001; // if PORT is not defined in .env file then use 5001
app.use(express.json()); // parse json body of requests from req.body (bu kod ile gelen isteklerin body kısmındaki json verileri okunabilir (req.body den))
app.use(cookieParser()); // parse cookies from requests

// app.get("/", (req, res) => {
//   // root route handler
//   res.send("Hello World !!!");
// });

app.use("/api/auth", authRoutes); // /api/auth ile başlayan istekler authRoutes dosyasına yönlendirilecek
// authRoutes burada şunu yapıyor: /api/auth/signup, /api/auth/login, /api/auth/logout
// yani auth ile ilgili fonksiyonları çağırıyor.
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)
app.listen(PORT, () => {
  // start server
  connectDB(); // connect to database
  console.log(`Server is running on port ${PORT}`);
}); // log message to console
