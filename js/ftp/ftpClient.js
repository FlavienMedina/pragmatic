import {argv,log,allowedCommand} from './utils'
import net from 'net'
import readline from 'readline'

class ftpClient {
  constructor(host, port) {
    this._host = host
    this._port = port
  }

  _prompt() {
    log('▶▶ ', 'white', false)
    const rl = readline.createInterface({
      input: process.stdin
    })
    rl.on('line', input => {
      this._socket.write(input)
    })
  }

  connect() {
    this._socket = net.createConnection({port: this._port}, () => {
      log('connected to server')
      this._prompt()
    })

    this._socket.on('data', data => {
      console.log(data.toString());
    })

    this._socket.on('end', () => {
      log('disconnected from server')
    })
  }


}

const args = argv()

if (args.length !== 2) {
  console.log('usage: server <host> <port>')
  process.exit(-1)
}
const [host, port] = args

const client = new ftpClient(host, port)

client.connect()
