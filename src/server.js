import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import { errorHandler } from './modules/middleware/errorHandler.js'
import bookRoutes from './modules/routes/bookRoutes.js'
import userRoutes from './modules/routes/userRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3005

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/users', userRoutes)
app.use('/books', bookRoutes)

app.use((req, res) => {
	res.status(404).json({ error: 'Роут не найден' })
})

app.use(errorHandler)

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Подключен к MongoDB')
		app.listen(PORT, () =>
			console.log(`Сервер запущен на http://127.0.0.1:${PORT}`)
		)
	})
	.catch(err => console.error('Не удалось подключится к MongoDB :', err))
