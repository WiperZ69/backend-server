import express from 'express'
import {
	deleteBookById,
	getAllBooks,
	getBookById,
	updateBookById,
} from '../controllers/bookController.js'

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.put('/:id', updateBookById)
router.delete('/:id', deleteBookById)

export default router
