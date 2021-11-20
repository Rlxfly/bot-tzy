 let fs = require('fs')
 let handler  = async (m, { itsu, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": thumb
					},
					"title": "ＵｗＵ",
					"description": "Rlxfly",
					"currencyCode": "IDR",
					"priceAmount1000": "404000000",
					"retailerId": ">//<",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
}
itsu.sendMessage(m.chat, 'Kyaaa', MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}


handler.help = ['shp']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғ']

handler.command = /^shp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler