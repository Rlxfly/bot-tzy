let handler = async (m, { itsu, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: itsu.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
