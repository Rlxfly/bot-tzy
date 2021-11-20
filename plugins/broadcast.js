let handler  = async (m, { itsu, text }) => {
  let chats = itsu.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = await itsu.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「Broadcast bot」')
  for (let id of chats) itsu.copyNForward(id, content, true)
  itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
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

