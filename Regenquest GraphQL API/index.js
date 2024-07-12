require('dotenv').config();
const mongoose = require('mongoose');

// Use the MONGODB_URI environment variable
const uri = process.env.MONGODB_URI;
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// TODO: find out how to reinclude this plugin
// const {
//   ApolloServerPluginLandingPageLocalDefault,
// } = require('apollo-server-core');
const cors = require("cors");
const { DBConnection } = require("./db/connection");
const cookieParser = require("cookie-parser");

const AuthDirective = require("./graphql/auth");
const VerifyTokenDirective = require("./graphql/verifyToken");
const FormatObjDirective = require("./graphql/formatObj");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./graphql/typeDefs");

// Provide resolver functions for your schema fields
const resolvers = require("./graphql/resolvers");

const corsOptions = {
  credentials: true,
  origin: [process.env.CROSS_ORIGIN],
};

async function startServer() {
  await DBConnection.init(process.env.DATABASE_CONNECTION);

  const app = express();
  app.use(cors(corsOptions));
  app.use(cookieParser());

  const server = new ApolloServer({
    // Disable Apollo Server's built-in CORS policy definition option because it does not work
    cors: false,
    typeDefs,
    resolvers,
    schemaDirectives: {
      auth: AuthDirective,
      verifyToken: VerifyTokenDirective,
      formatObj: FormatObjDirective,
    },
    csrfPrevention: true,
    cache: "bounded",
    context: ({ req, res }) => ({ req, res }),
    // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.start();
  // Disabling CORS again here
  server.applyMiddleware({ app, cors: false, path: "/" });

  return app;
}

let appPromise = startServer();

exports.handler = (req, res) => {
  appPromise
    .then((app) => {
      app(req, res);
    })
    .catch((err) => {
      console.error("Error starting server:", err);
    });
};
