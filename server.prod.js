/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const http = require('http');
const SocketIo = require('socket.io');

const PRO_PORT = 8080;

const app = express();


app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});


/* Start server */

const server = app.listen(8080,'localhost',function(){
  console.log("API server on");
})

const io = new SocketIo(server,{path:'/api/game'});
const socketevent = require('./server/socket')(io);
