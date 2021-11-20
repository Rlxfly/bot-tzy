let handler  = async (m, { itsu, text }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "「 All Group Broadcast 」", 
            'jpegThumbnail': global.thumb
		}
	}
}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await itsu.getProfilePicture(who)}
    catch (e){
    }

  let groups = itsu.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await itsu.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 All Group Broadcast 」')
  itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) itsu.copyNForward(id, content, 'conversation',{quoted: anu, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: `© ${itsu.user.name} || by Relldev` , body: '>///<', sourceUrl: 'https://chat.whatsapp.com/J3j8XFLPnOR0RI937C8Biu', thumbnail: global.thumb3}}} ,true)
  itsu.reply(m.chat, `_Done_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)


