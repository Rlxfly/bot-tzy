let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async (m, { itsu, text }) => {
  let [t1, t2] = text.split `|`
    let name = itsu.getName(m.sender)
 itsu.fakeReply(m.chat,t2 , '41798070610@s.whatsapp.net', t1+ '\n' ,'918132884890-1615035634@g.us')
}
 
handler.help = ['cek']

handler.tags = ['main']

handler.command = /^cek$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
