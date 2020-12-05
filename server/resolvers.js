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

	Book: {
		author: async (book) => {
			let author = await Authors.findById(book.authorId);
			return author;
		},
	},

	Author: {
		books: async (author) => {
			let books = await Books.find({ authorId: author._id });
			return books;
		},
	},

	Mutation: {
		createBook: async (root, { input }) => {
			const newBook = new Books({
				name: input.name,
				genre: input.genre,
				authorId: input.authorId,
			});
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
