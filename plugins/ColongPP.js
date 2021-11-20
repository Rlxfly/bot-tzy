async function handler(m) {
if (!m.quoted) throw 'Tag orang yang akan di curi photo profilenya kak'
let user = m.quoted.sender
              pp = await this.getProfilePicture(user)
itsu.sendFile(m.chat, pp, m)
await m.reply(' *Berhasil kak* ')
}

handler.help = ['Curi']
handler.tags = ['Tools']
handler.command = /^colong$/i

handler.owner = true

module.exports = handler