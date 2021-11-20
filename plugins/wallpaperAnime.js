const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { itsu }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        itsu.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*Nih Wallpapernya*'
        })
    } catch (e) {
        console.log(e)
        throw 'Fitur error Kak'
    }
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
