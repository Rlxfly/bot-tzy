let handler = async (m, { itsu, args, command, usedPrefix }) => {
  if (!args[0]) return m.reply(`Reply video dengan command /${command}`)
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/video/.test(mime))
	
	{
		let vid = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
m.reply('Loading')
		 await itsu.downloadAndSaveMediaMessage(vid, './src/sw').then(() => m.reply('Sending...'))
	} else throw 'Reply videonya!'
let dur = args[0] || '9'
let isi = require('fs').readFileSync ('./src/sw.mp4')
await itsu.sendFile(m.chat, isi, 'pler' + '.mp4', `
 Y
 © ${itsu.user.name}
`.trim(), m, false, {
  
ptt: false, duration: dur, thumbnail: global.thumb3 })
}

handler.help = ['bugv', 'bugvideo']
handler.tags = ['tools']
handler.command = /^bug(v|video)$/i
handler.owner = false

module.exports = handler
