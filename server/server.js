const path = require('path'); //node js way of importing is by using require, so we're importing path and express
const express = require('express');
const app = express(); //assigned the imported express to const app
const publicPath = path.join(__dirname, '..', 'public'); //path.join links our server to the given path

//public app serves all assets in public directory
app.use(express.static(publicPath)); //express.static is a predefined method where we're passing public path

const port = process.env.PORT || 3000;
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
  
  app.listen(port, () => {
    console.log('Server is up!');   //3000=port that express should use

  });
  



