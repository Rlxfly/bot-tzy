let handler = async (m, { itsu, text, participants }) => {
  let [t1, t2] = text.split `|`
  let isi1 = t1
let isi2 = t2
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(itsu.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net'))
 return await itsu.groupRemove(m.chat, [user]).then(()=> itsu.fakeReply(`${user}`, `_You was removed_\n*Reason*: ${isi2}` , '0@s.whatsapp.net',  '👋' ,'918132884890-1615035634@g.us')).then(()=> itsu.blockUser(`${user}`, 'add'))
}

handler.help = ['remove | (reason)']
handler.tags = ['group']
handler.command = /^remove$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
