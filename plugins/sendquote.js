async function handler(m) {
    if (!m.quoted) throw 'reply pesan!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, {quoted: m, contextInfo:{"forwardingScore": 1000, "isForwarded": true}})
}
handler.command = /^q$/i
module.exports = handler