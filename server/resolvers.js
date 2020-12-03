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
		createBook: async (root, { input }) => {
			const newBook = new Books(_.omit(input, ['id']));
			newBook.id = newBook._id;
			await newBook.save();
			return newBook;
		},
		createAuthor: async (root, { input }) => {
			const newAuthor = new Authors(_.omit(input, ['id']));
			newAuthor.id = newAuthor._id;
			await newAuthor.save();
			return newAuthor;
		},
	},
};
