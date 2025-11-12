const fs = require('fs')
const path = require('path')

const usersPath = path.join(__dirname, '../data/users.json')

function readUsers(callback) {
	fs.readFile(usersPath, 'utf8', callback)
}

module.exports = { readUsers }
