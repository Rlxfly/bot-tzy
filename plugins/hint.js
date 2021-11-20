let handler  = async (m, { itsu }) => {
    itsu.tebakgambar = itsu.tebakgambar ? itsu.tebakgambar : {}
    let id = m.chat
    if (!(id in itsu.tebakgambar)) throw false
    let json = itsu.tebakgambar[id][1]
    m.reply('```' + json.bantuan + '```')
}
handler.command = /^hint$/i

module.exports = handler