require("dotenv").config()
const express = require("express");
const http = require("http").createServer(express);

const PORT = precess.env.PORT || 5000;
const io = require("socket.io").apply(http);

io.on("connection", (socket)=>{
    
    console.log("User Online");
    socket.on("canvas-data", (data)=>{
      socket.broadcast.emit("canvas-data", data);
    })
});


http.listen(PORT, () =>{
    console.log(`Server Started at port ${PORT}`);
})