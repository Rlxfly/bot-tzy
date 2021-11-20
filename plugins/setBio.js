let handler = async (m, { itsu, text }) => {
  if (!text) throw `uhm.. teksnya mana?`
  try {
    await itsu.setStatus(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Eror`
  }
}
handler.help = ['setbio <teks>']
handler.tags = ['owner']
handler.command = /^(setbio)$/i
handler.owner = true

module.exports = handler