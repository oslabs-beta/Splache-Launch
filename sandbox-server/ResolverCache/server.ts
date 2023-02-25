const {graphql, GraphQLSchema} = require('graphql');
const express = require('express');
import { ResolverCache } from "./ResolverCache";
import {StarWarsSchema} from "./ResolverCacheSchema";
const PORT = 4000;

const app = express();
app.use = express.json();


app.use('/graphql', (req, res) => {
    graphql({ schema: StarWarsSchema, source: req.body.query})
      .then((response) => {
        res.send(response)
      })
  })

app.listen(PORT,() => {console.log(`listening on port ${PORT}`)})


