let fs = require('fs')
let handler  = async (m, { itsu, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "Hi lort", 
            'jpegThumbnail': thumb
		}
	}
}
itsu.sendMessage(m.chat, 'Test',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['Fgc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^Fgc$/i
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