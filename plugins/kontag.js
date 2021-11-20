const phoneNum = require('awesome-phonenumber')
let handler = async (m, { itsu, text, participants }) => {
  let [t1, t2] = text.split `|`
          itsu.sendContact(m.chat, t1, t2, null, { contextInfo: { mentionedJid: await (await itsu.groupMetadata(m.chat)).participants.map(v => v.jid) }})
}



handler.help = ['kontag']
handler.tags = ['group']
handler.command = /^kontag$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler

