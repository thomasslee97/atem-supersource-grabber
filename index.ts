import { Atem } from 'atem-connection'
import * as fs from 'fs'
const IP = process.env.IP

if (!IP) {
    process.exit(1)
}

const conn = new Atem({debug: true})
conn.on('error', console.log)
conn.connect(IP)
conn.once('connected', () => {
    console.log(JSON.stringify(conn.state.video.superSources[0], undefined, 4))
    fs.writeFileSync('state.json', JSON.stringify(conn.state.video.superSources[0]))
    process.exit(0)
})
