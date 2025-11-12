const http = require('http')
const url = require('url')
const { readUsers } = require('./modules/readUsers')

const HOST = '127.0.0.1'
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true)
	const query = parsedUrl.query

	if ('hello' in query) {
		const name = query.hello

		if (name) {
			res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
			res.end(`Hello, ${name}.`)
		} else {
			res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' })
			res.end('Enter a name')
		}
	} else if ('users' in query) {
		readUsers((err, data) => {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
				res.end('Error reading users.json')
			} else {
				res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8',
				})
				res.end(data)
			}
		})
	} else if (Object.keys(query).length === 0) {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		res.end('Hello, World!')
	} else {
		res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
		res.end('')
	}

	console.log(
		`[${new Date().toISOString()}] ${req.method} ${req.url} → ${res.statusCode}`
	)
})

server.listen(PORT, HOST, () => {
	console.log(`Сервер запущен на http://${HOST}:${PORT}`)
})
