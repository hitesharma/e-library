import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Book {
    id: ID
    name: String
    genre: String
    author: Author
}

type Author {
    id: ID
    name: String
    books: [Book]
}

type Query {
    books: [Book]
    book(id: ID): Book
    authors: [Author]
    author(id: ID): Author
}

input BookInput {
    id: ID
    name: String
    genre: String
    authorId: String
}

input AuthorInput {
    id: ID
    name: String
}

type Mutation {
    createBook(input: BookInput): Book
    createAuthor(input: AuthorInput): Author 
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
