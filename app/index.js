const express = require('express');
const GenerationEngine = require('./generation/engine.js');

const app = express();
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

const engine = new GenerationEngine();

app.locals.engine = engine;

engine.start();


module.exports = app; 