//coded by itsu using quick edit
async function handler(m) {
if (!m.quoted) throw 'reply gambar kak'
let q = this.serializeM(await m.getQuotedObj())
let pp = await itsu.downloadM(q)
itsu.updateProfilePicture(m.sender, pp)
await m.reply(' *Berhasil kak* ')
}

handler.help = ['setpp']
handler.tags = ['Tools']
handler.command = /^setpp$/i

handler.owner = true

module.exports = handler