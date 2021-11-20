let handler = async (m, { itsu }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  itsu.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await itsu.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', 'bonk!', m)
}

handler.help = ['hornycard', 'hornylicense']
handler.tags = ['maker']

handler.command = /^(horny(card|license))$/i

module.exports = handler