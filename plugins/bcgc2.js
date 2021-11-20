let handler  = async (m, { itsu, text }) => {
  let groups = itsu.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) await itsu.copyNForward(id, itsu.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 All Group Broadcast 」'), true).catch(_=>_)
  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(bcgc2)$/i
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