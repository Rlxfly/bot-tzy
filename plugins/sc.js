let handler  = async (m, { itsu, usedPrefix: _p }) => {
prep = itsu.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: 'this bot just recode of script \n\nhttp://github.com/Nurutomo/wabot-aq',
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: global.thumb
}}, {contextInfo: null, quoted: m})
itsu.relayWAMessage(prep)
}



handler.help = ['sc']

handler.tags = ['main']

handler.command = /^sc$/i
handler.owner = false


module.exports = handler