let handler = function (m) {
  const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let fs = require('fs')
let peli = fs.readFileSync('./Nice.jpeg')
let name = this.contacts[m.sender].notify
let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  
  
   let listOwner = []
   let listFake = []
  for (let i of global.owner.map(v => v + '@s.whatsapp.net'))
  for (let i of global.fake.map(v => v + '@s.whatsapp.net'))
  for (let i of global.fakeNum.map(v => v + '@s.whatsapp.net'))
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:</ʀᴇʟʟ.xls⁴̅⁰͍³〆>\nORG: Busy!!!\nitem2.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem2.X-ABLabel: Just random people\nEND:VCARD` })
  this.sendMessage(m.chat, { displayName: listOwner.length + 'hii', contacts: listOwner }, 'contactsArrayMessage', { quoted: fkon, contextInfo:{"forwardingScore": 1000, "isForwarded": true}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
