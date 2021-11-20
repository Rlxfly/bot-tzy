let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { itsu }) => {
  let pp = './src/emror.jpeg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await itsu.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await itsu.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = itsu.getName(who)
    let str = `
Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nAbout: ' + about : ''}
Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
XP: TOTAL ${exp} (${exp - min} / ${xp}) [${max - exp} left to levelup]
Level: ${level}
Limit: ${limit}
Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    itsu.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

