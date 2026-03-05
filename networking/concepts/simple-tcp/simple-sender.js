const net = require("net");

const socket = net.createConnection({host: "127.0.0.1", port: 3099},()=>{
    // i can send buffer 
    const buff = Buffer.from("736f6d652064617461","hex")
    // socket.write("This is a message from Sender!!")
    socket.write(buff)
})