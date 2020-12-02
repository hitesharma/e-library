import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true,
	})
);

const port = 8080 || process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
