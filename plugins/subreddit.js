let fetch = require("node-fetch")

let handler = async (m, { itsu, text }) => {
  await itsu.sendMessage(m.chat, '```Loading...```', 'conversation', { thumbnail: thumb, contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true }}}}, remoteJid: 'status@broadcast' }})
  let name = itsu.contacts[m.sender].notify
  let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Media tidak ditemukan!'
  await itsu.sendFile(m.chat, json.url, text, json.title, fkon, false, { thumbnail: global.thumb2})
}
handler.help = ['subreddit <query>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler