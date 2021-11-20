let handler = async (m, { itsu, args }) => {
  let users = m.mentionedJid
  itsu.groupDemoteAdmin(m.chat, users)
}
handler.help = ['demote','member','v'].map(v => 'o' + v + ' @user')
handler.tags = ['group']
handler.command = /^(demote|member)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
