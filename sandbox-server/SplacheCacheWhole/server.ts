

// const CacheWhole = require('./CacheWhole.ts')
// const express = require('express');
import {SplacheCacheWhole} from './CacheWhole'
import express from 'express'
const app = express(); 
const PORT = 4001; 
const schema = require ('./schema.ts'); 

const cache = new SplacheCacheWhole(schema);

app.use(express.json())


app.use('/graphql', cache.wholeCache, (req, res) => {
  res.send(res.locals.queryResult)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})