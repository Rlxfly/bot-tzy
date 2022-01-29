let handler = async (m, { itsu, args, command, usedPrefix }) => {
let fe = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? eror : m.sender
  let pp = 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg'
  try {
    pp = await itsu.getProfilePicture(who)
  } catch (e) {

  }
	if (!args[0]) return m.reply(`Reply video dengan command /${command}`)
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/video/.test(mime)) {
		let vid = await q.download()
		m.reply('Loading')
		await itsu.sendMessage(m.chat, vid, 'videoMessage', { quoted: m, duration: args[0] || 9 , thumbnail: await (await fe(pp)).buffer() })
	} else throw 'Reply videonya!'
}
handler.help = ['bugv', 'bugvideo']
handler.tags = ['tools']
handler.command = /^bug(v|video)$/i
handler.owner = false

module.exports = handler
