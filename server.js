const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Define the data to be sent as response
  const responseData = { message: 'Hello from the server!' };

  // Convert the data to JSON format and send it as response
  res.end(JSON.stringify(responseData));
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
