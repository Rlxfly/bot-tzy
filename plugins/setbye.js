let handler = async (m, { itsu, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.itsu.bye = text
    else if (isOwner) itsu.bye = text
    else global.DATABASE._data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

