

import {SplacheCacheWhole} from './CacheWhole'
import express from 'express'
import cors from 'cors'
const app = express(); 
const PORT = 4001; 
const schema = require ('./schema.ts'); 

const cache = new SplacheCacheWhole(schema);

app.use(express.json())
app.use(cors())


app.use('/graphql', cache.wholeCache, (req, res) => {
  res.status(200).json(res.locals.queryResult);
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})