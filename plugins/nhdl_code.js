let fs = require('fs')

let axios = require('axios')

let request = require('request')
let topdf = require('image-to-pdf')
let nhentai = require('nhentai-node-api')

let handler = async (m, { itsu, args }) => {
	if (!args[0]) return m.reply('Cari apa?')
	if (isNaN(args[0])) return m.reply('Pake angka')
	await m.reply('Loading...')
	let count = 0
	let ResultPdf = []
	let doujin = await nhentai.getDoujin(args[0])
	let array_page = doujin.pages
	let title = doujin.title.default

	for (let index = 0; index < array_page.length; index++) {
		let image_name = './nhentai/' + title + index + '.jpg'
		await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
		console.log(array_page[index])
		ResultPdf.push(image_name)
		count++
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, 'A4')
		.pipe(fs.createWriteStream('./nhentai/' + title + '.pdf'))
		.on('finish', resolve)
	)

	let size = await fs.statSync(`./nhentai/${title}.pdf`).size
	if (size < 45000000) {
		m.reply('Uploading...')
		await itsu.sendFile(m.chat, fs.readFileSync(`./nhentai/${title}.pdf`), `${title}.pdf`, '', m, false, { asDocument: true, thumbnail: fs.readFileSync(`./nhentai/${title}0.jpg`) })
			.then(() => {
				fs.unlink(`./nhentai/${title}.pdf`, (err) => {
					if (err) throw err
				})
			})
	} else {
		m.reply('Uploading to anonfiles because file size to large')
		let options = {
			method: 'POST',
			url: 'https://api.anonfiles.com/upload',
			formData: {
				file: fs.createReadStream(`./nhentai/${title}.pdf`),
			},
		}

		for (let index = 0; index < array_page.length; index++) {
			fs.unlink('./nhentai/' + title + index + '.jpg', (err) => {
				if (err) throw err
			})
		}

		request(options, function(err, res, body) {
			if (err) console.log(err)
			fs.unlink(`./nhentai/${title}.pdf`, (err) => {
				if (err) throw err
			})
			m.reply('Link download to file: ' + JSON.parse(body).data.file.url.full)
		})
	}
}

handler.help = ['nhentaipdf <code>']
handler.tags = ['downloader']
handler.command = /^nh(pdf|entaipdf)$/i

module.exports = handler