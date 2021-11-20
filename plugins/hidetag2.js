let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, { itsu, text, participants }) => {
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: '1 Tag',
                    jpegThumbnail: thumb3
                          }
                        }
                      }
  const { MessageType } = require('@adiwajshing/baileys')
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = itsu.cMod(
    m.chat,
    itsu.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: anu
      }
    ),
    text || q.text 
  )
  await itsu.relayWAMessage(msg)
}
handler.help = ['hidetag'].map(v => 'o' + v + ' [teks]')
handler.tags = ['grou']
handler.command = /^(tag)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
