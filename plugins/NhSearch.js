let axios = require('axios')

let handler = async (m, { itsu, usedPrefix, text }) => {
	if (!text) m.reply('Cari apa?')
	await m.reply('Loading...')
	let res = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=chadson&query=${text}`)
	res = res.data.result
	let txt = `*_Reply pesan ini untuk mendownload_*\n`
	txt += `Contoh: ${usedPrefix}getnhentai 1\n\n`
	let nomor = 0
	for (let i of res) {
		txt += `*${nomor += 1}. ${i.title_native}*\n`
		txt += `ID: ${i.id}\n`
		txt += `Watch online: cin.pw/v/${i.id}\n`
		txt += `Upload: ${formatDate(i.date_upload * 1000)}\n`
		txt += `Page: ${i.page}\n`
		txt += `━`.repeat(30) + `\n`
	}
	prep = itsu.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: txt,
orderTitle: 'B',
sellerJid: '62838200730170@s.whatsapp.net',
thumbnail: global.thumb3
}}, {contextInfo: null, quoted: m })
itsu.relayWAMessage(prep)
}
	
handler.command = /^nh?(search|entaisearch)$/i
module.exports = handler

function formatDate(n, locale = 'id') {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
}