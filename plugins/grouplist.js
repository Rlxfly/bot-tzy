let handler = async (m, { itsu }) => {
  let txt = itsu.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${itsu.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  itsu.reply(m.chat, 'List Groups:\n' + txt, m)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

