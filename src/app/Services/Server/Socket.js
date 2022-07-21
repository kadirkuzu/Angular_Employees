const io = require("socket.io")(2000, {
  cors: {
    origin:["http://localhost:4200"]
  }
})
io.on("connection", socket => {
  console.log(socket.id + " connected")
  socket.on("employeeAdding", data => {
    socket.broadcast.emit("employeeAdded",data)
  })


})
