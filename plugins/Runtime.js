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
  return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
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
						itsu.sendMessage(m.chat, '```Runtime```' , 'conversation', {quoted: m, thumbnail: thumb3, contextInfo:{externalAdReply: {title: 'Rell >///<', body: `${teks}`, sourceUrl: '', thumbnail: thumb3}}})
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