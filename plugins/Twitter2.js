const { twitter } = require('../lib/scrape')
let handler = async (m, { itsu, args, usedPrefix, command }) => {
  if (!args[0]) throw `*Perintah ini untuk mengunduh media twitter dengan link*\n\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
  if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Link salah! Perintah ini untuk mengunduh media twitter dengan link*\n\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`

  twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    m.reply(pesan)
    for (let { url } of json.data)
      itsu.sendFile(m.chat, url, 'ig' + (/jpg/i.test(url) ? '.mp4' : '.jpg'), `© ${itsu.user.name}`, m, false, { thumbnail: global.thumb})
  })

}
handler.help = ['twt-img'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^twt-img$/i
handler.limit = true
module.exports = handler