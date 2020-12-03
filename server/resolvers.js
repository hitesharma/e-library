import { Books, Authors } from './dbConnectors';
import _ from 'lodash';

export const resolvers = {
	Query: {
		books: async () => {
			return await Books.find();
		},
		book: async (root, { id }) => {
			var data = await Books.findById(id);
			return data;
		},
		authors: async () => {
			return await Authors.find();
		},
		author: async (root, { id }) => {
			var data = await Authors.findById(id);
			return data;
		},
	},

	Mutation: {
		createBook: async (root, { args }) => {
			const newBook = new Books(_.omit(args, ['id']));
			newBook.id = newBook._id;
			await newBook.save();
			return newBook;
		},
	},
};
