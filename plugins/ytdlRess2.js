let limit = 30
let fetch = require('node-fetch')
const { servers, yt } = require('../lib/y2mate')

let handler = async (m, { itsu, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.DATABASE.data.chats[m.chat]
  let quality = args[1] || '360'
  let server = (args[2] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yt(args[0], quality + 'p', 'mp4', quality, servers.includes(server) ? server : servers[0])
  
  let isLimit = (isPrems || isOwner ? 99 : limit) * 99888898 < filesize
let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  itsu.sendMessage(m.chat, `*Title:* ${title}\n*Size:* ${filesizeF}\n\n_Sending..._` , 'conversation', {quoted: m, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: 'Simple WhatsApp bot', body: `© ${itsu.user.name}`, sourceUrl: '', thumbnail: global.thumb3}}})
  if (!isLimit) itsu.sendFile(m.chat, dl_link, title + '.mp4', `
 ${title}
 © ${itsu.user.name}
`.trim(), m, false, {
  
ptt: false, duration: 999999999999, thumbnail: global.thumb })
}
handler.command = /^dlvid$/i
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
