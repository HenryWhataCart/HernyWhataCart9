const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index')
const http = require('http')
const {Server} = require('socket.io')
const {User} = require('./db')

const server = express();
const app = http.createServer(server)
const io = new Server(app,{
    cors:{
        origin: '*'
    }
})

server.name = 'server';

server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

io.on('connection', async (socket)=>{
    const userId = socket.handshake.query.userId
    
    await User.update({socketId: socket.id},{where:{id:userId}})
    console.log(`Cliente conectado ${socket.id}`);
    console.log(userId);
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
})

server.use('/',routes(io))

module.exports = app