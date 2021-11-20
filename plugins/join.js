let linkRegex = /([0-9A-Za-z]{20,24})/i

let handler = async (m, { itsu, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await itsu.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
}
handler.help = ['join']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
