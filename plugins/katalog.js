let split = '|'
let handler  = async (m, { itsu , text, usedPrefix }) => {
  let lmao = 'emror?'
  let [txt, ...text2] = text.replace(lmao, '').trimStart().split(split)
  if (!txt) throw 'Masukan Judul dan Deskripsi nya'
  if (!text2) throw `Contoh : ${usedPrefix}jadikatalog SLAYER?|INI BUKAN SELAYER BANG:>`
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  if (/image|video/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    let pi = itsu.prepareMessageFromContent(m.chat, {
	"productMessage": { 
          "product": { 
            "productImage":{ 
	      "mimetype": "image/jpeg", 
	      "jpegThumbnail": img 
            }, 
	    "title": `${txt}`, 
	    "description": `${text2}`, 
	    "currencyCode": "IDR", 
            "priceAmount": "50000", 
	    "retailerId": "games-wabot", 
	    "productImageCount": 1 
	  }, 
	  "businessOwnerJid": itsu.user.jid
	}
      }, {})
    itsu .relayWAMessage(pi, m)
  } else m.reply('FOTO NYA MANA OM?')
}

handler.help = ['katalog']
handler.tags = ['tools']
handler.command = /^(katalog)$/i
handler.owner = true
handler.fail = null
handler.exp = 2

module.exports = handler