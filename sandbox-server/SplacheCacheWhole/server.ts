

// const CacheWhole = require('./CacheWhole.ts')
// const express = require('express');
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
  //res.set('Access-Control-Allow-Origin', 'http://localhost:4001');
  res.status(200).json(res.locals.queryResult);
})

// app.use('/graphql', (req, res) => {
//   graphql({ schema: schema, source: req.body.query})
//     .then((response) => {
//       res.send(response)
//     })
// })

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})