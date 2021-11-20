let handler = async (m, { itsu, args, usedPrefix, command }) => {
	let teks = args[0]
	if (!teks) throw `Nomornya?\nContoh: ${usedPrefix + command} 628111111xxxx`
	if (!teks.includes('x')) throw `Contoh: ${usedPrefix + command} 62811111111xx`
	let numberPattern = /\d+/g
	let nomer = teks.match(numberPattern)
	let random_length = teks.length - nomer[0].length
	let random
	if (random_length == 1) random = 10
	else if (random_length == 2) random = 100
	else if (random_length == 3) random = 1000
	else if (random_length == 4) random = 10000
	
	let nomerny = `*List Nomer*\n\nPunya Bio\n`
	let no_bio = `\nTanpa Bio\n`
	let no_watsap = `\nTidak Terdaftar\n`
	
	for (let i = 0; i < random; i++) {
		let nu = ['1','2','3','4','5','6','7','8','9']
		let dom1 = nu[Math.floor(Math.random() * nu.length)]
		let dom2 = nu[Math.floor(Math.random() * nu.length)]
		let dom3 = nu[Math.floor(Math.random() * nu.length)]
		let dom4 = nu[Math.floor(Math.random() * nu.length)]
		let rndm
		if (random_length == 1) rndm = dom1
		else if (random_length == 2) rndm = dom1 + dom2
		else if (random_length == 3) rndm = dom1 + dom2 + dom3
		else if (random_length == 4) rndm = dom1 + dom2 + dom3 + dom4
		
		let anu = await itsu.isOnWhatsApp(nomer[0] + i + '@s.whatsapp.net')
		
		try {
			let anu1 = await itsu.getStatus(anu.jid)
			if (anu1.status == 401 || anu1.status == 'Hey there! I am using WhatsApp.') {
				no_bio += 'wa.me/' + anu.jid.split`@`[0] + '\n'
			} else {
				nomerny += 'wa.me/' + anu.jid.split`@`[0] + '\n'
			}
		} catch {
			no_watsap += 'wa.me/' + nomer[0] + i + '\n'
		}
	}
	m.reply(nomerny + no_bio + no_watsap)
}
  
handler.help = ['tools']
handler.command = /^(nowa|dork)$/i

module.exports = handler