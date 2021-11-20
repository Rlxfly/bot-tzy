let handler = async (m, { itsu, text }) => {
  if (!text) throw 'No Text'
  itsu.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await itsu.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: itsu.getName(m.sender)
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['tools']

handler.command = /^(ytcomment)$/i

module.exports = handler
