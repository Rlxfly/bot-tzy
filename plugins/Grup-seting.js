let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { itsu, args, usedPrefix, command }) => {
	let isClose = { // Switch Case Like :v
		'open': false,
		'close': true,
	}[(args[0] || '')]
	await itsu.updatePresence(m.chat, Presence.composing)
	if (isClose === undefined)
		throw `
*Format salah! Contoh :*

  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim()
	await itsu.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
