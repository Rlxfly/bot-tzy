let handler  = async (m, { itsu, usedPrefix: _p }) => {
let { performance } = require('perf_hooks')
let fs = require('fs')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `\n\t\t*「 \t ${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S \t」*\n`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `Rell uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
					}
						    
						     prep = itsu.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10112006, status: 500,
surface: 999,
message: teks,
description: 'pler',
orderTitle: 'awikwok',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: '6283820073017@s.whatsapp.net',
thumbnail: global.thumb3
}}, {contextInfo: null, quoted: m})
itsu.relayWAMessage(prep)
				/*	itsu.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^runtime$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
