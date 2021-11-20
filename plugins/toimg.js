let handler = async (m, { itsu, command, usedPrefix }) => {
  const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: '『🄳🄾🄽🄴』',
                    jpegThumbnail: global.thumb2
                          }
                        }
                      }
  
const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
let { webp2png } = require('../lib/webp2mp4')
  if (!global.support.convert &&
      !global.support.magick &&
      !global.support.gm) {
      if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
      let mime = m.quoted.mimetype || ''
      if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
      let media = await m.quoted.download()
      let out = Buffer.alloc(0)
      if (/webp/.test(mime)) {
          out = await webp2png(media)
      }
      await itsu.sendFile(m.chat, out, 'out.png',`© ${itsu.user.name}`, anu, false, {
  thumbnail: global.thumb3
      })
      return
  }
  if (!m.quoted) return itsu.reply(m.chat, 'Tag stikernya!', m)
  let q = { message: { [m.quoted.mtype]: m.quoted } }
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await itsu.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
    let im = spawn(_spawnprocess, _spawnargs)
    im.on('error', e => itsu.reply(m.chat, util.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
      itsu.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, { contextInfo: { stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: { jpegThumbnail: global.thumb, viewOnce: true }}}}, remoteJid: 'status@broadcast' }})
    })
  }
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
