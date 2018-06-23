#!/usr/bin/env nodejs
// -----------------------------------------------------------------------------
//  MAGUS's STATIC EXPRESS server application
//  index.js
// -----------------------------------------------------------------------------
//
// this is executable from the command line
// 


// INCLUDES --------------------------------------------------------------------

const PORT    = require('./src/config').PORT;
const express = require('express');
const path    = require('path');

// -----------------------------------------------------------------------------


// the web app
const app = express();

// routing

// serve static files
app.use(express.static('public_html'));
// If we still can not find what we are looking for, 
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'public_html', '404.html'));
});

// listen
app.listen(
  PORT,
  () => { console.log('MAGUS\'s STATIC EXPRESS listening on port ', PORT, '!'); }
);