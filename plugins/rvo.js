let handler = async (m, { itsu, text }) => {
    if (!m.quoted) return itsu.sendMessage(m.chat, 'where\'s message?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Itu bukan pesan viewOnce'
    await itsu.copyNForward(m.chat, await itsu.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}

handler.help = ['rvo']
handler.tags = ['tools']

handler.command = /^rvo/i

module.exports = handler