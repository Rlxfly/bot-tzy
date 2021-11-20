let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { itsu, text }) => {
  let users = (await itsu.groupMetadata(m.chat)).participants.map(u => u.jid)
  itsu.sendMessage(m.chat, text, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
}
handler.help = ['pengumuman','hidetag'].map(v => 'o' + v + ' [teks]')
handler.tags = ['owner']
handler.command = /^(opengumuman|oannounce|ohiddentag|ohidetag)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
