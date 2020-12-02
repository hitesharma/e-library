import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Book {
    id: ID
    name: String
    genre: String
}

type Query {
    books: [Book]
    book(id: ID): Book
}

input BookInput {
    id: ID
    name: String
    genre: String
}

}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
