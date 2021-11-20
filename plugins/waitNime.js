const uploadImage = require('../lib/uploadImage')

const fetch = require('node-fetch')


let handler = async (m, { itsu, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply(`Reply foto/kirim foto dgn caption ${usedPrefix}wait`)
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Mime ${mime} tidak support`)
  await m.reply('Searching Anime Titles...')
  let img = await q.download()
  let url = await (uploadImage)(img)
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let res = await fetch(`https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(url)}`)
  if (!res.ok) throw 'Emror :/'
  let json = await res.json()
  let { anilist, filename, episode, similarity, video } = json.result[0]
  let txt = `
  ${similarity < 0.89 ? 'Saya Memiliki Keyakinan Rendah Tentang Hal Ini' : ''}
*Judul:* ${filename}
*Similarity:* ${(similarity * 100).toFixed(1)}%
*Episode:* ${episode.toString()}
  `.trim()
  itsu.sendFile(m.chat, video, 'wait.mp4', txt, m)
}
handler.help = ['wait']
handler.tags = ['tools']
handler.command = /^(wait)$/i

module.exports = handler