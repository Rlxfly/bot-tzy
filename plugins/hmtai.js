let handler = async (m, { itsu, text }) => {
let hmtai = require('hmtai')
let img = await hmtai.nsfw.ahegao()
await itsu.sendFile(m.chat, img, '', '', m)
}

module.exports = handler
handler.help = ['cek']

handler.tags = ['main']

handler.command = /^hmtai$/i
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
