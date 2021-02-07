const io = require('socket.io')(3000, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['content-type'],
        credentials: true
    }
})

io.on('connection', (socket)=> {
    console.log('Usuário conectado')

    socket.on('client_message', (data)=> {
        console.log(data)
    })

    socket.on('client_hello', (data)=> {
        io.sockets.emit('server_hello', data)

    })

})
