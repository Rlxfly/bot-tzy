let linkRegex = /([0-9A-Za-z]{20,24})/i

let handler = async (m, { itsu, text }) => {
  let [_, code] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  let res = await itsu.query({
    json: ["query", "invite", code],
    expect200: true
  })
  let caption = `
-- [Group Link Inspector] --
${res.id}
- *Title:* ${res.subject}
- *Created on* ${formatDate(res.creation * 1000)}
- *Title changed* by @${res.subjectOwner.split`@`[0]} in * *${formatDate(res.subjectTime * 1000)}*${res.descOwner ? `
- *Description changed* by @${res.descOwner.split`@`[0]} in *${formatDate(res.descTime * 1000)}*` : ''}
- *Member:* ${res.size}
- *Member (saved contact)*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `*Deskripsi:*
${res.desc}` : '*Tidak ada Deskripsi*'}
`.trim()
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: itsu.parseMention(caption)
    }
  })
}
handler.help = ['inspect <link>']
handler.tags = ['tools']

handler.command = /^inspect$/i

module.exports = handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}