let fs = require('fs')
let handler  = async (m, { itsu, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Uwu.jpeg', 
                    jpegThumbnail: thumb3
                          }
                        }
                      }
itsu.sendMessage(m.chat, ' ">//<" ',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}



handler.help = ['doc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^doc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler