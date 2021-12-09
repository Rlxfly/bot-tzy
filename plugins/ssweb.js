let handler = async (m, { itsu, command, args }) => {
  let full = /f$/i.test(command) ? 'on' : 'off'
  if (!args[0]) return m.reply('Tidak ada url')
  await m.reply('Loading...')
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = 'http://hadi-api.herokuapp.com/api/ssweb2?url=' + url + '&device=desktop&full=' + full
  itsu.sendFile(m.chat, ss, 'screenshot.png', url, m, {thumbnail: thumb3})
}

handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i

module.exports = handler
