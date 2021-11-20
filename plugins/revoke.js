let handler = async (m, { itsu }) => {
  let res = await itsu.revokeInvite(m.chat)
  itsu.reply(m.sender, 'https://chat.whatsapp.com/' + res.code, m)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^re(voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler