let axios = require('axios')
let fetch = require('node-fetch')

let handler = async (m, { itsu, args }) => {
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return !0
	if (m.quoted && m.quoted.fromMe && m.quoted.isBaileys && /getnhentai 1/i.test(m.quoted.text)) {
		if (!args[0]) return m.reply('Masukkan angka')
		if (isNaN(args[0])) return m.reply('Pake angka')
		await m.reply('Loading...')
		let data = JSON.stringify(await eval(`${args[0]}-1`))
		let input = m.quoted.text.split('='.repeat(25))[data].split('ID: ')[1].split('\n')[0]
		let res = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${input}?apikey=chadson`)
		let { title_romaji, image } = res.data.result
		let _data = await axios.get(`https://api.lolhuman.xyz/api/nhentaipdf/${input}?apikey=chadson`)
		_data = _data.data.result
	itsu.sendFile(m.chat, _data, `${title_romaji}.pdf`, '', m, false, { asDocument: true, thumbnail: await (await fetch(image[0])).buffer() })
	}
}

handler.command = /^get?(nhentai|hentai|doujin)$/i
module.exports = handler