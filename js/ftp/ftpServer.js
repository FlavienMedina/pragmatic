import {
  argv,
  log,
  allowedCommand
} from './utils'
import net from 'net'

class ftpServer {
  constructor(port) {
    this._port = port
  }

  _user() {}

  start() {
    this._server = net.createServer((socket) => {
      log('socket connected')
      socket.setEncoding('ascii')

      socket.on('data', data => {
        console.log('DATA:', data);
        if (data === 'USER') {
          this._user()
        }
      })

      socket.on('end', () => {
        log('socket disconnected')
      })

    })

    this._server.on('error', (err) => {
      throw err
    })

    this._server.listen(this._port, () => {
      log('server bound')
    })
  }


}

const args = argv()

if (args.length !== 1) {
  console.log('usage: server <port>')
  process.exit(-1)
}
const port = parseInt(args[0])

const server = new ftpServer(port)

server.start()
