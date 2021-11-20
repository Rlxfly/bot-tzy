let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return
  itsu.tebakgambar = itsu.tebakgambar ? itsu.tebakgambar : {}
  if (!(id in itsu.tebakgambar)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == itsu.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(itsu.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].exp += itsu.tebakgambar[id][2]
      m.reply(`*Benar!*\n+${itsu.tebakgambar[id][2]} XP`)
      clearTimeout(itsu.tebakgambar[id][3])
      delete itsu.tebakgambar[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
