import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express(); // Create an express app (Express app oluştur).

const server = http.createServer(app); // Create a server with the express app (Express uygulaması ile bir sunucu oluştur).
const io = new Server(server, {
  // Create a new instance of socket.io (socket.io'nun yeni bir örneğini oluştur).
  cors: {
    // Set the cors options (cors seçeneklerini ayarla).
    origin: ["http://localhost:3000"], // Allow the origin (Kökeni izin ver ).
    methods: ["GET", "POST"], // Allow the methods (Yöntemleri izin ver).
  },
});

export const getRecieverSocketId = (recieverID) => {
    return userSocketMap[recieverID]; 

};
// Create a userSocketMap object (userSocketMap nesnesi oluştur).
const userSocketMap = {}; // { userId: socketId }

io.on("connection", (socket) => {
  // Listen for the connection event (Bağlantı olayını dinle).
  console.log("a user connected", socket.id); // Log the user id (Kullanıcı kimliğini günlüğe kaydet).

  const userId = socket.handshake.query.userId; // Get the userId from the query (Sorgudan userId'yi al).
  if (userId != "undefined") userSocketMap[userId] = socket.id; // Add the userId and socketId to the userSocketMap (userId ve socketId'yi userSocketMap'e ekle).

  // io.emit() is used to send the events to all the connected clients (io.emit(), bağlı tüm istemcilere olayları göndermek için kullanılır).
  // Send the online users to all the connected clients (Tüm bağlı istemcilere çevrimiçi kullanıcıları gönder).
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); // kim online kim çevrimdışı ?
  // socket.on() is used to listen for the events. Can be used both on client and server side.
  // socket.on() olayları dinlemek için kullanılır. Hem istemci hem de sunucu tarafında kullanılabilir.
  socket.on("disconnect", () => {
    // Listen for the disconnect event (Bağlantı kesme olayını dinle).
    console.log("a user disconnected", socket.id); // Log the user id (Kullanıcı kimliğini günlüğe kaydet).
    delete userSocketMap[userId]; // Delete the user from the userSocketMap (Kullanıcıyı userSocketMap'ten sil).
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Send the online users to all the connected clients (Tüm bağlı istemcilere çevrimiçi kullanıcıları gönder).
    // emit => Göndermek
  });
});

export { app, io, server }; // Export the app, io and server (Uygulamayı, io ve sunucuyu dışa aktar).
