const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', function (client) {
  console.log('Client connected')
  client.on('chat', data => {
    console.log('Incoming chat:', data)
    io.emit('broadcast', data)
  })

  client.on('join', data => {
    console.log('User joining:', data)
    io.emit('joined', data)
  })

  client.on('disconnect', data => {
    console.log('Client disconnected')
  })
})

server.listen(process.env.PORT || 3000)