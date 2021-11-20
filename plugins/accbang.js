let handler = async (m, { itsu, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await itsu.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin dong$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
