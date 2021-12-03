
let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { itsu, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
itsu.sendMessage(m.chat, `*Title:* ${title}\n*Size:* ${filesizeF}` , 'conversation', {quoted: m, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: 'Simple WhatsApp bot', body: `© ${itsu.user.name}`, sourceUrl: '', thumbnail: global.thumb}}})
  if (!isLimit) itsu.sendFile(m.chat, dl_link , `By ${itsu.user.name}.mp3`, {quoted: m, thumbnail: thumb2, contextInfo:{externalAdReply: {title: `${title}`, body: `© ${itsu.user.name}`, sourceUrl: '', thumbnail: global.thumb}}}, m, false, {ptt: true, duration: 999999999999, asDocument: false})
}
handler.command = /^dlmsc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
