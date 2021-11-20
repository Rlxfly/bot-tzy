let fs = require('fs')
let handler = m => m

handler.all = async function (m) {
let gw = '6283820073017@s.whatsapp.net'
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid || gw) && m.isGroup) {
            await this.sendFile(m.chat, './tag.webp', 'tag.webp', '', m, false, {sendEphemeral: true})
        }
    } catch (e) {
        return
    }
    let listOwner = []
  for (let i of global.owner.map(v => v + '@s.whatsapp.net'))
    // ketika ditag
    try {
      
        if (m.mentionedJid.includes(i) && m.isGroup) {
            await this.sendFile(m.chat, './tag.webp', 'tag.webp', '', m, false, {sendEphemeral: true})
        }
    } catch (e) {
        return
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}