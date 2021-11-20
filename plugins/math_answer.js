let handler = async (m, { itsu }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != itsu.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) throw false
  itsu.math = itsu.math ? itsu.math : {}
  if (!(id in itsu.math)) throw 'Soal itu telah berakhir'
  if (m.quoted.id == itsu.math[id][0].id) {
  let math = JSON.parse(JSON.stringify(itsu.math[id][1]))
  if (m.text == math.result) {
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(itsu.math[id][3])
    delete itsu.math[id]
    throw `*Jawaban Benar!*\n+${math.bonus} XP`
  } else {
    if (--itsu.math[id][2] == 0) {
      clearTimeout(itsu.math[id][3])
      delete itsu.math[id]
      throw `*Kesempatan habis!*\nJawaban: *${math.result}*`
    } else throw `*Jawaban Salah!*\nMasih ada ${itsu.math[id][2]} kesempatan`
  }
 }
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
