const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
// const config = require('dotenv').config();

app.set('view engine', 'hbs');
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/login', (req, res)=>{
  res.render('login')
})

app.listen(port, (req, res) =>{
  console.log('working');
})
