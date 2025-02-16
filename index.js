const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const MongoInit = require("./mongoinit.js");

dotenv.config();

const app = express();

async function startServer() {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const dbConnected = await MongoInit();
    if (!dbConnected) {
        console.error("Exiting due to database connection failure.");
        process.exit(1);
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cacheControl: { defaultMaxAge: 60 },
        persistedQueries: false,
        cache: "bounded"
    });

    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer();

module.exports = app;
