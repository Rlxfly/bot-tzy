//uwu

const fetch = require('node-fetch')

let handler = async (m, { itsu, text }) => {
  if (!text) throw 'Nyari apa?'
  await itsu.sendMessage(m.chat, '```Loading...```', 'conversation', { thumbnail: thumb2, contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { orderMessage: {viewOnce: false }}}}, remoteJid: 'status@broadcast' }})
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await itsu.sendFile(m.chat, img.url_image, 'wallpaper', `© ${itsu.user.name}`, m, false ,{thumbnail: global.thumb})
}
handler.help = ['wallpaperq <query>']
handler.tags = ['internet']
handler.command = /^wall(paper)?q?$/i
handler.limit = true

module.exports = handler