let handler = async (m, { itsu, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.itsu.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('Done!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
