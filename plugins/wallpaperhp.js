const hmtai = require("hmtai");
let handler = async (m, { itsu }) => {
await m.reply('Wait...')
let img = hmtai.mobileWallpaper();
var capt = `🐦`
itsu.sendFile(m.chat, img, 'whp.jpeg', capt, m)
}

handler.help = ['wallnime']
handler.tags = ['internet']

handler.command = /^(wallnime|wallhp)$/i

handler.group = true

module.exports = handler