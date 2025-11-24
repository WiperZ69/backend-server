import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true, minlength: 2 },
	author: { type: String, required: true, minlength: 2 },
	year: { type: Number, required: true },
})

export const Book = mongoose.model('Book', bookSchema)
