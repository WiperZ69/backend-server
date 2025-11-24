import { Book } from '../models/bookModel.js'

export const getAllBooks = async (req, res, next) => {
	try {
		const books = await Book.find()
		res.json(books)
	} catch (err) {
		next(err)
	}
}

export const getBookById = async (req, res, next) => {
	try {
		const book = await Book.findById(req.params.id)
		if (!book) return res.status(404).json({ error: 'Book not found' })
		res.json(book)
	} catch (err) {
		next(err)
	}
}

export const updateBookById = async (req, res, next) => {
	try {
		const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!book) return res.status(404).json({ error: 'Book not found' })
		res.json(book)
	} catch (err) {
		next(err)
	}
}

export const deleteBookById = async (req, res, next) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id)
		if (!book) return res.status(404).json({ error: 'Book not found' })
		res.json({ message: 'Book deleted successfully' })
	} catch (err) {
		next(err)
	}
}
