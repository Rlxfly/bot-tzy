let fs = require('fs')
let handler  = async (m, { itsu, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	 key: { 
          fromMe: false,
	      participant: `6285240750713@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285240750713-1610340626@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
itsu.sendMessage(m.chat, 'Test',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['tod']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^tod$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler