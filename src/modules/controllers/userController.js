import { User } from '../models/userModel.js'

export const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find()
		res.json(users)
	} catch (err) {
		next(err)
	}
}

export const getUserById = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) return res.status(404).json({ error: 'User not found' })
		res.json(user)
	} catch (err) {
		next(err)
	}
}

export const updateUserById = async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!user) return res.status(404).json({ error: 'User not found' })
		res.json(user)
	} catch (err) {
		next(err)
	}
}

export const deleteUserById = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id)
		if (!user) return res.status(404).json({ error: 'User not found' })
		res.json({ message: 'User deleted successfully' })
	} catch (err) {
		next(err)
	}
}
