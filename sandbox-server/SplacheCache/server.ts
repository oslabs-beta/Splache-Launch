import {graphql} from 'graphql';
import cors from 'cors'
import express from 'express';
import {schema} from './schema';
import { SplacheCache } from './SplacheCache';

const app = express(); 

app.use(express.json())
app.use(cors())

const PORT = 4002;

const cache = new SplacheCache(schema)

app.use('/graphql', cache.GQLquery, (req, res) => {
    res.send(res.locals.queryResult)
  })

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})