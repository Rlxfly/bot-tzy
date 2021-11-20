let handler = async (m, { itsu, args }) => {
  let users = m.mentionedJid
  itsu.groupMakeAdmin(m.chat, users)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(promote|admin|\^|↑)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

