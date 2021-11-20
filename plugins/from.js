 const { MessageType} = require("@adiwajshing/baileys")
 let handler  = async (m, { itsu, usedPrefix: _p }) => {
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let fs = require ('fs')
 const teksnye =[
'join',
'...',
]
var teks = teksnye[Math.floor(Math.random() * (teksnye.length))]
itsu.sendMessage(m.chat, 'join' , 'conversation', {quoted: m, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: 'UwU', sourceUrl: 'https://chat.whatsapp.com/J3j8XFLPnOR0RI937C8Biu', thumbnail: global.thumb}}})
}

handler.help = ['from']

handler.tags = ['main']

handler.command = /^from$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler