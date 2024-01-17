//first we require express
const express = require ('express');
// then we require http 
const http = require ('http');
//then w3e require our socket io 
const io = require ('socket.io');
//we create our port 
const port = 6543;  
//we create an express app
const app = express();
//we create our http connection
const server = http['createServer'] (app);
const socket = io (server)
//regonizig ejs(rendering)
app['set'] ('view engine', 'ejs')
//setting an endpoint
app['get'] ('/', (req, res) => {
    res['render'] ('homepage')   
})
//deciding what the app will do  
socket['on'] ('connection', (socket) => {
    //console['log'] (socket.id)//   

    socket['on'] ('message', (data) => {
      socket.broadcast.emit ('message', data)
    })
})
//we then listen to our server
server['listen'] (port, () => {
    console['log'] ('Listening on port ' +port)
}) 