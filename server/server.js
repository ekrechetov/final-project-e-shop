const express = require('express');


const app = express();

//app.get('/message', (req, res) => {
//  res.json({msg: 'This is a test message returned by app'})
//})
//
//app.get('*', (req, res) => {
//  res.json({msg: 'This should be index.html'})
//})

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`)
})