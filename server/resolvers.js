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
	},
};
