let handler = async m => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		let img = await q.download()
		itsu.updateProfilePicture(itsu.user.jid, img).then(() => m.reply('Sukses Mengganti Foto Profile Bot!'))
	} else throw 'Reply imagenya'
}

handler.help = ['ppbot', 'botpp'].map(v => 'set' + v)
handler.command = /^set(ppbot|botpp)$/i
handler.owner = true

module.exports = handler
