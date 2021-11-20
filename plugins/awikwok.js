let handler = async (m, { itsu, text }) => {
let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
itsu.groupUpdateSubject(m.chat, 'Rell uwu >///<').then(() => itsu.groupUpdateDescription(m.chat, ' _Rell uwu >//<_ \n\n\n :3')).then(() => itsu.updateProfilePicture(m.chat, global.thumb3)).then(() =>  itsu.groupSettingChange(m.chat, GroupSettingChange.messageSend, true))
}

handler.customPrefix = /relluwu/i
handler.command = new RegExp
handler.rowner = true
module.exports = handler
