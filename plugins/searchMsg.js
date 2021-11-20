let handler = async (m, { itsu, text }) => {
    if (!text) throw 'masukan pesan yg mo dicari!'
    let split = text.split`|`
    let result = await itsu.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Hanya ditemukan ${total} pesan ngab` : `Ditemukan ${total} pesan`
        m.reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await itsu.loadMessage(_remoteJid, _ids)
            itsu.reply(m.chat, 'Nih pesannya', _message)
        })
    }
}

handler.help = ['search <pesan>|<jumlah>']
handler.tags = ['tools']

handler.command = /^search/i

module.exports = handler