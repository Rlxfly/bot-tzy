let handler = async (m, { itsu }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  itsu.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
    avatar: await itsu.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'simpcard.png', 'simp', m)
}

handler.help = ['simpcard']
handler.tags = ['maker']

handler.command = /^(simpcard)$/i

module.exports = handler