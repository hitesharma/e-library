import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost:27017/e-library', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB....'))
	.catch((error) => console.error('Connection Failed....'));

const BookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
});

const Books = mongoose.model('book', BookSchema, 'book');

export { Books };
