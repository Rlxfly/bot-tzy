const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { itsu, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas audio yang ingin diubah ke voice note dengan caption *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  itsu.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m,
    ptt: true
  })
}
handler.help = ['tovn']
handler.tags = ['tools']

handler.command = /^to(vn|(ptt)?)$/i

module.exports = handler
