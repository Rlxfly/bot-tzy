let handler  = async (m, { itsu, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      itsu.menu = text
      itsu.reply(m.chat, 'Menu berhasil diatur\n' + info, m)
    } else {
      itsu.menu = {}
      itsu.reply(m.chat, 'Menu direset', m)
    }
  } else {
    itsu.menu = typeof itsu.menu == 'object' ? itsu.menu : {}
    if (text) {
      itsu.menu[type] = text
      itsu.reply(m.chat, 'Menu ' + type + ' berhasil diatur\n' + info, m)
    } else {
      delete itsu.menu[type]
      itsu.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp yang dibutuhkan untuk levelup)
%limit (Limit)
%name (Nama)
%weton (Weton Hari ini)
%week (Hari)
%date (Tanggal)
%time (Jam)
%uptime (Uptime Bot)
%rtotalreg (Jumlah User yang daftar di database)
%totalreg (Jumlah User yang ada di database)
%npmname
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Kategori)

Bagian Menu Body:
%cmd (Command)
%islimit (Jika command di limit)
`.trim()
