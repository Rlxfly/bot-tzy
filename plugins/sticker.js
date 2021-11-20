const { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { itsu, args, usedPrefix, command }) => {
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
					"title": "© ʳᵉˡˡᵈᵉᵛ",
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
const { sticker } = require('../lib/sticker')
  let nick = itsu.contacts[m.sender].notify || itsu.contacts[m.sender].vname
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
let gc = itsu.getName(m.chat)
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto/Video tidak ditemukan'
      stiker = await sticker(img, false, 'By: ' + nick || '', '@Rlxfly' || '')
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) itsu.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m, contextInfo:{externalAdReply: {title: '', body: 'Simple WhatsApp Bot', sourceUrl: '', thumbnail: thumb3}}
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler
