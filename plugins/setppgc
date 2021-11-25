let handler = async m => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		let img = await q.download()
		itsu.updateProfilePicture(m.chat, img).then(() => m.reply('Sukses Mengganti Foto Profile Group!'))
	} else throw 'Reply imagenya'
}

handler.help = ['gs', 'group'].map(v => 'setpp' + v)
handler.command = /^setpp(gc|group)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
