let limit = 30
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { itsu, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  itsu.sendMessage(m.chat, `*Title:* ${title}\n*Size:* ${filesizeF}` , 'conversation', {quoted: m, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: 'Simple WhatsApp bot', body: `© ${itsu.user.name}`, sourceUrl: '', thumbnail: global.thumb}}})
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) itsu.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
`.trim(), m, false, {ptt: true, duration: 400000}, _thumb || {})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler

