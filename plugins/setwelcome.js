let handler = async (m, { itsu, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.itsu.welcome = text
    else if (isOwner) itsu.welcome = text
    else global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

