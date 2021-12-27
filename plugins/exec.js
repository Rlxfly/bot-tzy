let syntaxerror = require('syntax-error')
let util = require('util')
let handler  = async (m, _2) => {
   let { itsu, usedPrefix, command, text, noPrefix, args, groupMetadata } = _2
let fs = require('fs')


let peli = thumb3
let ye = thumb
  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1 
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => {}).constructor('print', 'm', 'handler', 'require', 'itsu', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
    _return = await exec.call(itsu, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return /*itsu.reply(m.chat, util.format(...args), m)*/
      	itsu.sendMessage(m.chat, util.format(...args), 'conversation', {thumbnail: peli, contextInfo:{externalAdReply: {title: 'Relldev', sourceUrl: '', body: ``, thumbnail: ye}}})
    }, m, handler, require, itsu, CustomArray, process, args, groupMetadata, f, f.exports, [itsu, _2])
  } catch (e) {
    let err = await syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    /*itsu.reply(m.chat, _syntax + util.format(_return), m)*/
let arr = []
for (let i = 0; i < 404; i++) arr.push({ productId: '4072560079514110' }) 
let list = await itsu.prepareMessageFromContent(m.chat, { listMessage: { title: 'ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ',  description: _syntax + util.format(_return) , listType: 2, productListInfo: { productSections: [{ title: 'github: Rlxfly', products: arr }], headerImage: { productId: '4072560079514110', jpegThumbnail: thumb3 }, businessOwnerJid: '6283820073017@s.whatsapp.net' }, footerText: `© ${itsu.getName('6283820073017@s.whatsapp.net')}` }}, { quoted: m })
itsu.relayWAMessage(list, { waitForAck: true })
    m.exp = old
  }
}
handler.help = ['> ', '=> ']
handler.tags = ['advanced']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}
