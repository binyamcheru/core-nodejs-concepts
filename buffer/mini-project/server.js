const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/upload") {

    const chunks = [];

    // Each chunk is a Buffer
    req.on("data", (chunk) => {
      console.log("Received chunk:", chunk);
      console.log("Is Buffer?", Buffer.isBuffer(chunk));
      chunks.push(chunk);
    });

    req.on("end", () => {
      // Combine all buffer chunks
      const fullBody = Buffer.concat(chunks);

      console.log("Final Buffer Length:", fullBody.length);

      // Save to file
      fs.writeFileSync("uploaded_file.bin", fullBody);

      res.writeHead(200);
      res.end("File uploaded successfully");
    });

  } else {
    res.writeHead(404);
    res.end("Not found");
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
