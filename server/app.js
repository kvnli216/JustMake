const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const PORT = 1337;
const server = app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../client/public/index.html')));

const io = socket(server);  

io.on('connection', (client) => {
  console.log(`Client ${client} connected...`);

}); 
