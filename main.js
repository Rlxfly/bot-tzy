require('./config.js')
let { WAConnection: _WAConnection } = require('@adiwajshing/baileys')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { generate } = require('qrcode-terminal')
let syntaxerror = require('syntax-error')
let simple = require('./lib/simple')
//  let logs = require('./lib/logs')
let { promisify } = require('util')
let yargs = require('yargs/yargs')
let Readline = require('readline')
let cp = require('child_process')
let path = require('path')
let fs = require('fs')

let rl = Readline.createInterface(process.stdin, process.stdout)
let WAConnection = simple.WAConnection(_WAConnection)


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}
// global.LOGGER = logs()
const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.DATABASE = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
if (!global.DATABASE.data.users) global.DATABASE.data = {
  users: {},
  chats: {},
  stats: {},
  msgs: {},
  sticker: {},
}
if (!global.DATABASE.data.chats) global.DATABASE.data.chats = {}
if (!global.DATABASE.data.stats) global.DATABASE.data.stats = {}
if (!global.DATABASE.data.stats) global.DATABASE.data.msgs = {}
if (!global.DATABASE.data.sticker) global.DATABASE.data.sticker = {}
global.itsu = new WAConnection()
let authFile = `${opts._[0] || 'Rell'}.json`
if (fs.existsSync(authFile)) itsu.loadAuthInfo(authFile)
if (opts['trace']) itsu.logger.level = 'trace'
if (opts['debug']) itsu.logger.level = 'debug'
if (opts['big-qr'] || opts['server']) itsu.on('qr', qr => generate(qr, { small: false }))
let lastJSON = JSON.stringify(global.DATABASE.data)
if (!opts['test']) setInterval(() => {
  itsu.logger.info('Saving database . . .')
  if (JSON.stringify(global.DATABASE.data) == lastJSON) itsu.logger.info('Database is up to date')
  else {
    global.DATABASE.save()
    itsu.logger.info('Done saving database!')
    lastJSON = JSON.stringify(global.DATABASE.data)
  }
}, 60 * 1000) // Save every minute
if (opts['server']) require('./server')(global.itsu, PORT)




if (opts['test']) {
  itsu.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  itsu.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype || '',
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  itsu.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await itsu.prepareMessageContent(content, type, opts)
    let waMessage = await itsu.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(5000).toString('hex').toUpperCase()
    itsu.emit('chat-update', {
      jid: itsu.user.jid,
      hasNewMessage: true,
      count: 1,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => itsu.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    global.DATABASE.save()
    process.send(line.trim())
  })
  itsu.connect().then(() => {
    fs.writeFileSync(authFile, JSON.stringify(itsu.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.Connect = new Date
  })
}
process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    itsu.off('chat-update', itsu.handler)
    itsu.off('message-delete', itsu.onDelete)
    itsu.off('group-participants-update', itsu.onParticipantsUpdate)
  }
  itsu.welcome = 'Hi, @user!\n Welcome to @subject'
  itsu.bye = 'byeee @user!'
          
  itsu.spromote = '@user is now admin!'
  itsu.sdemote = '@user was killed by admin!'
  itsu.handler = handler.handler
  itsu.onDelete = handler.delete
  itsu.onParticipantsUpdate = handler.participantsUpdate
  itsu.on('chat-update', itsu.handler)
  itsu.on('message-delete', itsu.onDelete)
  itsu.on('group-participants-update', itsu.onParticipantsUpdate)
  if (isInit) {
    itsu.on('error', itsu.logger.error)
    itsu.on('close', () => {
      setTimeout(async () => {
        try {
          if (itsu.state === 'close') {
            if (fs.existsSync(authFile)) await itsu.loadAuthInfo(authFile)
            await itsu.connect()
            fs.writeFileSync(authFile, JSON.stringify(itsu.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.Connect = new Date
          }
        } catch (e) {
          itsu.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}

// Plugin Loader
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    itsu.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) itsu.logger.info(`re - require plugin '${filename}'`)
      else {
        itsu.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else itsu.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) itsu.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      itsu.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()
process.on('exit', () => global.DATABASE.save())



// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) itsu.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) itsu.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) itsu.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => itsu.logger.info('Quick Test Done'))
  .catch(console.error)
