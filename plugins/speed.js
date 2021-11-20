let fs = require('fs')
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Fake location',
                    jpegThumbnail: fs.readFileSync('./src/5.jpeg')
                          }
                        }
                      }
let { performance } = require('perf_hooks')
let handler = async (m, { itsu }) => {
  let old = performance.now()
  await m.reply('_Testing speed..._')
  let neww = performance.now()
  let uwu = (neww - old + 'ms')
  itsu.sendMessage(m.chat, uwu ,
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})

}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^(ping)$/i
module.exports = handler
